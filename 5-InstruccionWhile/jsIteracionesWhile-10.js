/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{ 	
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promediosNegativos;
	var diferenciaPosNeg;
	var respuesta;

	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	respuesta = true;

	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número cualquiera.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>0) 
		{
			sumaPositivos += numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if (numeroIngresado<0) 
			{
				sumaNegativos += numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if ((numeroIngresado % 2) == 0) 
		{
			cantidadPares++;
		}

		respuesta =	confirm("¿Desea ingresar otro número?");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promediosNegativos = sumaNegativos / cantidadNegativos;

	diferenciaPosNeg = sumaPositivos + sumaNegativos;

	document.writeln("La suma de números negativos es :"+sumaNegativos+"<br>");
	document.write("La suma de números positivos es :"+sumaPositivos+"<br>");
	document.write("La cantidad de números negativos es :"+cantidadNegativos+"<br>");
	document.write("La cantidad de números positivos es :"+cantidadPositivos+"<br>");
	document.write("La cantidad de ceros es :"+cantidadCeros+"<br>");
	document.write("La cantidad de números pares es :"+cantidadPares+"<br>");
	document.write("El promedio de los números negativos es :"+promediosNegativos+"<br>");
	document.write("El promedio de los números positivos es :"+promedioPositivos+"<br>");
	document.write("La diferencia entre los números positivos y los negativos es :"+diferenciaPosNeg+"<br>");
}