/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var sumaPositivos;
	var multiploNegativos;
	var numeroIngresado;

	sumaPositivos = 0;
	multiploNegativos = 1;
	respuesta = true;
	
	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número cualquiera.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>0)
		{
			sumaPositivos += numeroIngresado;
		}
		else
		{
			if (numeroIngresado<0)
			{
			multiploNegativos *= numeroIngresado;
			}
		}
		
		respuesta =	confirm("¿Desea ingresar otro número?");
	}

	document.getElementById('txtIdSuma').value = sumaPositivos;
	document.getElementById('txtIdProducto').value = multiploNegativos;

}//FIN DE LA FUNCIÓN