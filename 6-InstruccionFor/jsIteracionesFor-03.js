/*
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var cantidadRepeticiones;

	cantidadRepeticiones = prompt("Indique la cantidad de veces que quiere repetir el mensaje.");

	for (var i = 0; i < cantidadRepeticiones;i++) 
	{
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN