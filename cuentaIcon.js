const colores = [
  '#F44336', // Rojo suave
  '#E91E63', // Rosa vibrante
  '#9C27B0', // Morado
  '#673AB7', // Índigo profundo
  '#3F51B5', // Azul oscuro
  '#2196F3', // Azul brillante
  '#00BCD4', // Cian
  '#009688', // Verde azulado
  '#4CAF50', // Verde
  '#8BC34A', // Verde claro
  '#CDDC39', // Lima
  '#FFEB3B', // Amarillo
  '#FF9800', // Naranja
  '#FF5722', // Naranja profundo
  '#795548', // Marrón
  '#607D8B'  // Gris azulado
];
const seleccionado = colores[Math.floor(Math.random() * colores.length)];
const perfil = document.getElementById("perfil")
perfil.style.backgroundColor = seleccionado
if (esMasOscuroDel50(seleccionado)) {
    perfil.style.color = "white"
} else {
    perfil.style.color = "black"
}
perfil.style.borderRadius = "50px"
perfil.style.display = "flex"
perfil.style.justifyContent = "center"
perfil.style.alignItems = "center"
perfil.style.flexDirection = "column"
perfil.style.fontSize = "20px"
perfil.style.height = "30px"
perfil.style.width = "30px"
function esMasOscuroDel50(colorHex) {
  const r = parseInt(colorHex.substring(1, 3), 16);
  const g = parseInt(colorHex.substring(3, 5), 16);
  const b = parseInt(colorHex.substring(5, 7), 16);
  const hsp = Math.sqrt(
    0.299 * (r * r) + 
    0.587 * (g * g) + 
    0.114 * (b * b)
  );
  return hsp < 127.5; 
}