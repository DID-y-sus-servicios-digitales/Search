const respuestas = {};

        // Cargar respuestas desde Firebase
        const database = firebase.database();
        database.ref('respuestas').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                respuestas = data;
            }
        });

        function obtenerRespuesta(pregunta) {
            if (respuestas[pregunta]) {
                return respuestas[pregunta];
            } else {
                return "¿Cuál es la respuesta?";
            }
        }

        function aprenderRespuesta(pregunta, respuesta) {
            respuestas[pregunta] = respuesta;
            // Guardar respuestas en Firebase
            database.ref('respuestas').update({ [pregunta]: respuesta });
        }

        function enviarMensaje() {
            const userInput = document.getElementById("user-input");
            const chatLog = document.getElementById("chat-log");
            const pregunta = userInput.value;

            chatLog.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;
            const respuesta = obtenerRespuesta(pregunta);
            chatLog.innerHTML += `<p><strong>IA:</strong> ${respuesta}</p>`;

            if (respuesta === "¿Cuál es la respuesta?") {
                const respuestaUsuario = prompt("¿Cuál es la respuesta?");
                if (respuestaUsuario) {
                    aprenderRespuesta(pregunta, respuestaUsuario);
                    chatLog.innerHTML += `<p><strong>IA:</strong> ¡Gracias! He aprendido la respuesta.</p>`;
                }
            }

            userInput.value = "";
        }
    </script>

    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>

    <script>
        // Inicializar Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyAiq27-ue3MeC2H4i1nNKyfJNvWCfmScaw",
            authDomain: "didia5.firebaseapp.com",
            databaseURL: "https://didia5-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "didia5",
            storageBucket: "didia5.firebasestorage.app",
            messagingSenderId: "652405109295",
            appId: "1:652405109295:web:714467f3edb571c6a28cda"
        };
        firebase.initializeApp(firebaseConfig);
