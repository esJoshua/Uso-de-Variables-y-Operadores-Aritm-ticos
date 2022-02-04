alert("Ingresa dos números diferentes y mayores a cero");
// variables
let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");

let sum = parseInt(num1) + parseInt(num2);
let subtraction = parseInt(num1) - parseInt(num2);
let multiplication = parseInt(num1) * parseInt(num2);
let division = (parseInt(num1) / parseInt(num2)).toFixed(2);
let module = parseInt(num1) % parseInt(num2);

// validador
if (
  num1 == num2 ||
  num1 < 0 ||
  num2 < 0 ||
  isNaN(num1) ||
  isNaN(num2) ||
  num1 == "" ||
  num2 == "" ||
  num1 == null ||
  num2 == null
) {
  alert(
    `Los números deben ser mayores a cero y no pueden ser iguales. Ingresaste ( ${num1} ) y ( ${num2} )`
  );
  location.reload();
} else {
  //Document write
  document.write(`<h1>Ejercicio 2</h1>`);
  document.write("<div>");
  document.write(
    `La Suma de ${num1} mas ${num2} es:` + "<b>" + sum + "</b><br>"
  );
  document.write(
    `La Resta de ${num1} menos ${num2} es:<b>${subtraction}</b><br>`
  );
  document.write(
    `La Multiplicación entre ${num1} y ${num2} es:<b>${multiplication}</b><br>`
  );
  document.write(
    `La División entre ${num1} y ${num2} es:<b>${division}</b><br>`
  );
  document.write(`El Módulo entre ${num1} y ${num2} es:<b>${module}</b><br>`);
  document.write(
    `<input type="button" value="Probar de nuevo" onclick="location.reload()"/>`
  );
  document.write(
    `<input type="button" value="Menú Principal" onclick="location.href='index.html'"/>`
  );
  document.write("</div>");
}
