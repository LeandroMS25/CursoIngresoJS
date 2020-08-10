/*
Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/
function mostrar()
{
	var raza;
	var peso;
	var temperatura;
	var edad;
	var peligroExtincion;
	var acumuladorEdad;
	var contadorAnimales;
	var promedioEdadAnimales;
	var razaPesoMax;
	var pesoMax;
	var banderaTempMaxPeligroExt;
	var tempMaxPeligroExt;
	var respuesta;

	respuesta = true;
	acumuladorEdad = 0;
	contadorAnimales = 0;
	banderaTempMaxPeligroExt = 1;

	while (respuesta == true) 
	{
		do 
		{
			raza = prompt("Ingrese la raza.");
		} while (!isNaN(raza));

		do 
		{
			peso = prompt("Ingrese el peso.");
			peso = parseInt(peso);	
		} while (peso<0 || isNaN(peso));

		do 
		{
			temperatura = prompt("Ingrese la temperatura del ambiente.");
			temperatura = parseInt(temperatura);	
		} while (isNaN(temperatura));

		do 
		{
			edad = prompt("Ingrese la edad.");
			edad = parseInt(edad);	
		} while (edad<0 || edad>100 || isNaN(edad));

		do 
		{
			peligroExtincion = prompt("¿El animal ingresado está en peligro de extinción? (Si o no).")
		} while (peligroExtincion != "si" && peligroExtincion != "no");

		if (contadorAnimales == 0 || peso>pesoMax) 
		{
			pesoMax = peso;
			razaPesoMax = raza;
		}

		acumuladorEdad += edad;
		contadorAnimales++;

		if (peligroExtincion == "si")
		{
			if (banderaTempMaxPeligroExt = 1 || temperatura>tempMaxPeligroExt) 
			{
				tempMaxPeligroExt = temperatura;
				banderaTempMaxPeligroExt = 0;
			}	
		}

		respuesta = confirm("¿Desea ingresar otro animal?");
	}

	promedioEdadAnimales = acumuladorEdad / contadorAnimales;

	console.log("<h2>El promedio de edad de los animales es: "+promedioEdadAnimales+"</h2><br>");

	console.log("<h2>La raza del animal mas pesado es: "+razaPesoMax+"</h2><br>");

	if (banderaTempMaxPeligroExt != 1) 
	{
		console.log("<h2>La temperatura máxima ingresada de los animales en peligro de extinción es: "+tempMaxPeligroExt+"</h2><br>");
	}
	else
	{
		console.log("<h2>No se ingresaron animales en peligro de extinción</h2><br>");
	}	
}