/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	descuento = 0.75;

	resultado = importe * descuento;

	alert(txtIdResultado.value = resultado);

}
