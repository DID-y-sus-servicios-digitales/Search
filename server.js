```javascript
// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

const users = new Set();

server.on('connection', (ws) => {
    const userId = Math.random().toString(36).substring(2, 9);
    users.add(userId);

    console.log(`Usuario ${userId} se ha conectado`);
    ws.send(JSON.stringify({ type: 'text', sender: 'Servidor', text: '¡Bienvenido al chat!' }));

    // Enviar mensaje de entrada al chat
    server.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ type: 'user-join', text: `El usuario ${userId} se ha unido al chat.` }));
        }
    });

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.type === 'text') {
                console.log(`Mensaje de ${userId}: ${parsedMessage.text}`);
                server.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        // Reenviar el mensaje a todos los clientes, incluyendo al emisor
                        client.send(JSON.stringify({ type: 'text', sender: userId, text: parsedMessage.text }));
                    }
                });
            }
        } catch (error) {
            console.error('Error al analizar el mensaje JSON:', error);
            ws.send(JSON.stringify({ type: 'error', text: 'Mensaje no válido. Por favor, envía un JSON válido.' }));
        }
    });

    ws.on('close', () => {
        console.log(`Usuario ${userId} se ha desconectado`);
        users.delete(userId);
        // Enviar mensaje de salida al chat
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'user-leave', text: `El usuario ${userId} ha abandonado el chat.` }));
            }
        });
    });

    ws.on('error', (error) => {
        console.error('Error en la conexión WebSocket:', error);
    });
});

console.log('Servidor WebSocket iniciado en ws://localhost:3000');

