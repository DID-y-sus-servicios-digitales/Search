const respuestas = {
    "hola": "¡Hola! ¿Cómo estás?",
    "cómo te llamas": "Soy una IA comunitaria."
};

async function obtenerRespuesta(pregunta) {
    if (respuestas[pregunta]) {
        return respuestas[pregunta];
    } else {
        // Buscar en Internet (ejemplo usando una API de búsqueda)
        const respuestaInternet = await buscarEnInternet(pregunta);
        if (respuestaInternet) {
            return respuestaInternet;
        } else {
            return "Lo siento, no sé la respuesta. ¿Me la puedes enseñar?";
        }
    }
}

async function buscarEnInternet(pregunta) {
    // Aquí iría el código para buscar en Internet usando una API de búsqueda
    // Ejemplo ficticio:
    if (pregunta.includes("clima")) {
        return "El clima está soleado.";
    } else {
        return null;
    }
}

function aprenderRespuesta(pregunta, respuesta) {
    respuestas[pregunta] = respuesta;
    // Aquí iría el código para guardar las respuestas en un servidor o base de datos en línea
    // Por ahora, solo las guardaremos localmente
    console.log("Respuesta aprendida:", pregunta, respuesta);
}

async function enviarMensaje() {
    const userInput = document.getElementById("user-input");
    const chatLog = document.getElementById("chat-log");
    const pregunta = userInput.value;

    chatLog.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;
    const respuesta = await obtenerRespuesta(pregunta);
    chatLog.innerHTML += `<p><strong>IA:</strong> ${respuesta}</p>`;

    if (respuesta.includes("¿Me la puedes enseñar?")) {
        const respuestaUsuario = prompt("¿Cuál es la respuesta?");
        if (respuestaUsuario) {
            aprenderRespuesta(pregunta, respuestaUsuario);
            chatLog.innerHTML += `<p><strong>IA:</strong> ¡Gracias! He aprendido la respuesta.</p>`;
        }
    }

    userInput.value = "";
}
