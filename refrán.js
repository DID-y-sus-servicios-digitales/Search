// Array de refranes
const refranes = [
    "A buen hambre no hay mal pan.",
    "Camarón que se duerme, se lo lleva la corriente.",
    "El que mucho abarca, poco aprieta.",
    "Más vale tarde que nunca.",
    "No hay mal que por bien no venga."
];

// Función para obtener el refrán de la semana
function refranDeLaSemana() {
    const fechaActual = new Date();
    const semanaDelAño = Math.floor((fechaActual - new Date(fechaActual.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24 / 7);
    const refranIndex = semanaDelAño % refranes.length; // Ciclo a través del array
    return refranes[refranIndex];
}

// Mostrar el refrán en el elemento HTML
document.getElementById("refran").innerText = refranDeLaSemana();
const textoInput = document.getElementById('textoInput');
        const generarBtn = document.getElementById('generarBtn');
        const qrcodeDiv = document.getElementById('qrcode');
        const descargaLink = document.getElementById('descargaLink');

        generarBtn.addEventListener('click', () => {
            const texto = textoInput.value;
            if (texto) {
                qrcodeDiv.innerHTML = ''; // Limpiar el QR anterior
                new QRCode(qrcodeDiv, texto);
                descargaLink.style.display = 'block'; // Mostrar el enlace de descarga
                descargaLink.href = qrcodeDiv.querySelector('img').src; // Obtener la URL del QR
                descargaLink.download = 'didsearch qrcode.png'; // Nombre del archivo de descarga
            }
        });

        // Configura tu proyecto de Firebase (¡NO PONGAS TUS CLAVES API DIRECTAMENTE AQUÍ!)
        const firebaseConfig = {
            apiKey: "AIzaSyDixxzOsC6C6gx06xJ9tJF7_GmsVOxymVw",
  authDomain: "spydid5.firebaseapp.com",
  projectId: "spydid5",
  storageBucket: "spydid5.firebasestorage.app",
  messagingSenderId: "11553021232",
  appId: "1:11553021232:web:779a916866a334e1ffbcf5"// Reemplaza con tu App ID
        };

        // Inicializa Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        // Obtén los elementos del DOM
        const botonAbrir = document.getElementById('abrirFormulario');
        const ventanaEmergente = document.getElementById('ventanaEmergente');
        const botonEnviar = document.getElementById('enviarDatos');
        const botonCerrar = document.getElementById('cerrarFormulario');
        const fondoOscuro = document.getElementById('fondoOscuro');

        // Función para mostrar la ventana emergente
        botonAbrir.addEventListener('click', () => {
            ventanaEmergente.classList.remove('oculto');
            fondoOscuro.classList.remove('oculto'); // Mostrar el fondo oscuro
        });

        // Función para enviar los datos a Firestore
        botonEnviar.addEventListener('click', () => {
            const nombre = document.getElementById('nombre').value;
            const apellidos = document.getElementById('apellidos').value;
            const email = document.getElementById('email').value;

            if (nombre === "" || apellidos === "" || email === "") {
                alert("Por favor, complete todos los campos.");
                return; // Detiene la ejecución si algún campo está vacío
            }

            // Guarda los datos en Firestore
            db.collection('usuarios').add({
                nombre: nombre,
                apellidos: apellidos,
                email: email
            })
            .then(() => {
                alert('Datos enviados correctamente.');
                ventanaEmergente.classList.add('oculto');
                fondoOscuro.classList.add('oculto'); // Ocultar el fondo oscuro
                // Limpiar los campos del formulario
                document.getElementById('nombre').value = "";
                document.getElementById('apellidos').value = "";
                document.getElementById('email').value = "";

            })
            .catch((error) => {
                console.error('Error al enviar los datos: ', error);
                alert('Ocurrió un error al enviar los datos. Por favor, inténtelo de nuevo.'); // Informar al usuario
            });
        });

        // Función para cerrar la ventana emergente
        botonCerrar.addEventListener('click', () => {
            ventanaEmergente.classList.add('oculto');
            fondoOscuro.classList.add('oculto'); // Ocultar el fondo oscuro
        });
