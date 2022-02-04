alert("Ingresa 5 números");
//variables
const num1 = prompt("Ingrese el primer número");
const num2 = prompt("Ingrese el segundo número");
const num3 = prompt("Ingrese el tercer número");
const num4 = prompt("Ingrese el cuarto número");
const num5 = prompt("Ingrese el quinto número");

const sum =
  parseInt(num1) +
  parseInt(num2) +
  parseInt(num3) +
  parseInt(num4) +
  parseInt(num5);

const avg = (sum / 5).toFixed(2);

//validador
if (
  isNaN(num1) ||
  isNaN(num2) ||
  isNaN(num3) ||
  isNaN(num4) ||
  isNaN(num5) ||
  num1 == "" ||
  num2 == "" ||
  num3 == "" ||
  num4 == "" ||
  num5 == "" ||
  num1 == null ||
  num2 == null ||
  num3 == null ||
  num4 == null ||
  num5 == null
) {
  alert(
    `Solo se permiten números. Datos ingresados: ( ${num1} ) - ( ${num2} ) - ( ${num3} ) - ( ${num4} ) - ( ${num5} )`
  );
  location.reload();
} else {
  // Document Write
  document.write(`<h1>Ejercicio 5</h1>`);
  document.write("<div>");
  document.write(`La suma de los números ingresados es: <b>${sum}</b><br>`);
  document.write(`El promedio de la suma de los números ingresados es: <b>${avg}</b><br>`);
  document.write(
    `<input type="button" value="Probar de nuevo" onclick="location.reload()"/>`
  );
  document.write(
    `<input type="button" value="Menú Principal" onclick="location.href='index.html'"/>`
  );
  document.write("</div>");
}
