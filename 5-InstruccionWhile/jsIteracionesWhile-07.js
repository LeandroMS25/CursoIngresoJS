/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = true;
	
	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número cualquiera.");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador += numeroIngresado;
		contador++;
		
		respuesta =	confirm("¿Desea ingresar otro número?");
	}

	alert("Se ingresaron un total de: "+contador+" números.");

	promedio = acumulador / contador;

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN