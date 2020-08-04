/*
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
*/ 
function mostrar()
{
	var cantidadRepeticiones;
	
	cantidadRepeticiones = prompt("Indique la cantidad de veces que quiere repetir el mensaje.");

	for (var i = 0;;i++) 
	{
		if(i>=cantidadRepeticiones)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN