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
