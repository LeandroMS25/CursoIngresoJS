/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	/*Formas de mostrar informacion al usuario*/ 
	//alert("Esto funciona de maravilla");
	//confirm("¿Desea continuar?");
	//prompt("Ingrese su nombre");
}
// Ejercicio 1 Sabado Clase 1
function mostrar()
{
	var producto;
	var importeSinAumento;
	var porcentajeAumento;
	var importeConAumento;
	var montoAumento;

	producto = prompt("Ingrese el nombre del producto.");
	importeSinAumento = prompt("Ingrese el importe del producto");
	porcentajeAumento = prompt("Ingrese el porcentaje del aumento.");

	importeSinAumento = parseInt(importeSinAumento);
	porcentajeAumento = parseFloat(porcentajeAumento);

	montoAumento = importeSinAumento * (porcentajeAumento / 100);

	importeConAumento = importeSinAumento + montoAumento;

	alert("El producto " + producto + " cuesta $" + importeSinAumento + " sin aumento, tiene un aumento de $" + montoAumento + " y el precio final es: $" + importeConAumento + ", gracias por su compra.");
}
// Ejercicio 2 Sabado Clase 1
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var superficie;

	ancho = prompt("Ingrese el ancho del terreno");
	largo = prompt("Ingrese el largo del terreno");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (ancho + largo) * 2;

	superficie = ancho * largo;

	alert("El terreno tiene " + ancho + " por " + largo + " metros. Su perimetro total es de " + perimetro + " metros y la superficie es de " + superficie + " metros cuadrados.");
}
// Ejercicio 3 Sabado Clase 1
function mostrar()
{
	var importeUno;
	var importeDos;
	var sumaImportes;
	var porcentajeDescuento;
	var importeConDescuento;
	var ivaMonto;
	var importeConIva;

	importeUno = prompt("Ingrese el importe del producto uno.");
	importeDos = prompt("Ingrese el importe del producto dos.");
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento.");

	importeUno = parseInt(importeUno);
	importeDos = parseInt(importeDos);
	porcentajeDescuento = parseInt(porcentajeDescuento);

	sumaImportes = importeDos + importeUno;

	montoDescuento = sumaImportes * (porcentajeDescuento / 100);

	importeConDescuento = sumaImportes - montoDescuento;

	ivaMonto = importeConDescuento * 0.21;

	importeConIva = importeConDescuento + ivaMonto;

	alert("Los productos cuestan $"+importeUno+" y $"+importeDos+", sumados son $"+sumaImportes+", tienen un descuento de $"+montoDescuento+" pesos, el precio total con descuento es $"+importeConDescuento+", el iva es de $"+ivaMonto+" y el precio final con IVA es $"+importeConIva+".");
}