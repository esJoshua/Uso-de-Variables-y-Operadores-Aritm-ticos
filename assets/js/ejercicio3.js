//variables
let celsius = prompt("Ingresa la temperatura en °Celsius");
const kelvin = (parseInt(celsius) + 273.15).toFixed(2);
const fahrenheit = (parseInt(celsius) * (9 / 5) + 32).toFixed(1);

// validador
if (isNaN(celsius) || celsius == "" || celsius == null) {
  alert(`Debe ser un valor numérico. Ingresaste ( ${celsius} )`);
  location.reload();
} else {
  //Document write
  document.write(`<h1>Ejercicio 3</h1>`);
  document.write("<div>");
  document.write(`<h2>${celsius}° Celsius son equivalentes a :<br></h2>`);
  document.write(`${kelvin}° kelvin<br>`);
  document.write(`${fahrenheit}° Fahrenheit<br>`);
  document.write(
    `<input type="button" value="Probar de nuevo" onclick="location.reload()"/>`
  );
  document.write(
    `<input type="button" value="Menú Principal" onclick="location.href='index.html'"/>`
  );
  document.write("</div>");
}
