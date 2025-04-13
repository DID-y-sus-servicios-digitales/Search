// Array de refranes
const refranes = [
    "A buen hambre no hay mal pan.",
    "Camarón que se duerme, se lo lleva la corriente.",
    "El que mucho abarca, poco aprieta.",
    "Más vale tarde que nunca.",
    "No hay mal que por bien no venga.",
    "Más vale pajaro en mano que ciento volando",
    "Ave que vuela, a la cazuela.",
    "El que a buen arbol se arrima, buena sombra le cobija.",
    "No por mucho madrugar, amanece más temprano.",
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
