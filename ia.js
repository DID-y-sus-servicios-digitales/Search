const deepseekApiKey = "sk-bdb4afe4215c43ee95e04f99d9f82a16"; // Reemplaza con tu clave API de DeepSeek

function enviarMensaje() {
  const userInput = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");
  const pregunta = userInput.value;

  chatLog.innerHTML += `<p><strong>Tú:</strong> ${pregunta}</p>`;

  // Llamar a la API de DeepSeek para obtener la respuesta
  fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${deepseekApiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat", // O el modelo que estés utilizando
      messages: [{ role: "user", content: pregunta }],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const respuesta = data.choices[0].message.content;
      chatLog.innerHTML += `<p><strong>IA:</strong> ${respuesta}</p>`;
    })
    .catch((error) => {
      console.error("Error al obtener la respuesta de DeepSeek:", error);
      chatLog.innerHTML += `<p><strong>IA:</strong> Lo siento, no puedo responder en este momento.</p>`;
    });

  userInput.value = "";
}
