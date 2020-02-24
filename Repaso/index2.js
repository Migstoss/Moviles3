const valorPregrado = 50000;
const valorPosgrado = 300000;

var promedio = prompt("Ingrese su promedio");

var preg = prompt("Está realizando un pregrado? (si - no) ");

if (promedio > 4.5 && preg === "si") {
	var creditos = 28;
	var descuento = 25;

	var valorPagar = creditos * valorPregrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (promedio >= 4 && promedio < 4.5 && preg === "si") {
	var creditos = 25;
	var descuento = 10;

	var valorPagar = creditos * valorPregrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (promedio > 3.5 && promedio < 4 && preg === "si") {
	var creditos = 20;
	var descuento = 0;

	var valorPagar = creditos * valorPregrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (promedio >= 2.5 && promedio < 3.5 && preg === "si") {
	var creditos = 15;
	var descuento = 0;

	var valorPagar = creditos * valorPregrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (promedio < 3.5 && preg === "si") {
	console.log("No puede matricularse")
} else if (promedio >= 4.5 && preg === "no") {
	var creditos = 20;
	var descuento = 20;

	var valorPagar = creditos * valorPosgrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (promedio < 4.5 && preg === "no") {
	var creditos = 10;
	var descuento = 0;

	var valorPagar = creditos * valorPosgrado;
	var valorDescuento = (valorPagar * descuento) / 100;
	var total = valorPagar - valorDescuento;
	console.log(total);
} else if (preg !== "si" && preg !== "no") {
	console.log("Error");
}