// Variables
const number = prompt("Escriba el numero de días");
let years = Math.floor(number / 365); // Cálculo de Años
// Cálculo de Semanas
if (number < 365) {
  weeks = Math.floor(number / 7);
} else {
  weeks = Math.floor((number - years * 365) / 7);
}
let days = number - years * 365 - weeks * 7; // Cálculo de Días

// validador & Document Write
if (number < 0 || isNaN(number) || number == "" || number == null) {
  alert(`Los números deben ser mayores a cero. Ingresaste ( ${number} )`);
  location.reload();
} else if (number > 0 && number < 7) {
  document.write(`<h1>Ejercicio 4</h1>`);
  document.write("<div>");
  document.write(`<h2>${number} equivale a:</h2> <br>`);
  document.write(`${days} Días.<br>`);
} else if (number > 0 && number < 365) {
  document.write(`<h1>Ejercicio 4</h2>`);
  document.write("<div>");
  document.write(`<h2>${number} equivale a:</h2><br>`);
  document.write(`${weeks} Semanas.<br>`);
  document.write(`${days} Días.<br>`);
} else {
  document.write(`<h1>Ejercicio 4</h2>`);
  document.write("<div>");
  document.write(`<h2>${number} equivale a:</h2><br>`);
  document.write(`${years} Años.<br>`);
  document.write(`${weeks} Semanas.<br>`);
  document.write(`${days} Días.<br>`);
}
document.write(
  `<input type="button" value="Probar de nuevo" onclick="location.reload()"/>`
);
document.write(
  `<input type="button" value="Menú Principal" onclick="location.href='index.html'"/>`
);
document.write("</div>");
