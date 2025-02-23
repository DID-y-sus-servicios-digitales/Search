const cargarBoton = document.getElementById("cargar-boton");
const loader = document.getElementById("loader");

cargarBoton.addEventListener("click", () => {
  loader.style.display = "block"; // Muestra el cargador
  // Simula un proceso de carga (puedes reemplazar esto con tu lógica de carga real)
  setTimeout(() => {
    loader.style.display = "none"; // Oculta el cargador después de 3 segundos
  }, 3000); // 3000 milisegundos = 3 segundos
});