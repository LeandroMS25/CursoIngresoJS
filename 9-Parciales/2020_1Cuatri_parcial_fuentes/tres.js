/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , 
edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;

	let respuesta;

	let flagTemperaturaMasAlta;
	let temperaturaMasAlta;
	let nombreTemperaturaMasAlta;

	let contadorMayoresEdadViudos;

	let cantidadHombresSolteros;
	let cantidadHombresViudos;
	
	let cantidadViejosTemperaturaAlta;

	let edadHombresSolteros;
	let promedioEdadHombresSolteros;

	contadorMayoresEdadViudos = 0;
	cantidadHombresSolteros = 0
	cantidadHombresViudos = 0;
	cantidadViejosTemperaturaAlta = 0;
	promedioEdadHombresSolteros = 0;
	edadHombresSolteros = 0;
	respuesta = true;
	flagTemperaturaMasAlta = 1;
	

	while (respuesta == true)
	{
		nombre = prompt("Ingrese el nombre del pasajero.");

		while(!isNaN(nombre))
		{
			nombre = prompt("Reingrese el nombre del pasajero.");
		}

		edad = prompt("Ingrese la edad del pasajero.");
		edad = parseInt(edad);

		while (edad<1 || edad>100 || isNaN(edad))
		{
			edad = prompt("Reingrese la edad del pasajero.");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese el sexo del pasajero.");

		while (sexo != "f" && sexo != "m" || !isNaN(sexo))
		{
			sexo = prompt("Reingrese el sexo del pasajero.");
		}

		estadoCivil = prompt("Ingrese el estado civil del pasajero."); 

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" || !isNaN(estadoCivil)) 
		{
			estadoCivil = prompt("Reingrese el estado civil del pasajero."); 
		}

		temperatura = prompt("Ingrese la temperatura del pasajero.");
		temperatura = parseInt(temperatura);

		while (temperatura<35 || temperatura>42 || isNaN(temperatura))
		{
			temperatura = prompt("Reingrese la temperatura del pasajero.");
			temperatura = parseInt(temperatura);
		}

		respuesta = confirm("¿Desea ingresar a otro pasajero?");

		// Punto a - La persona con la temperatura mas alta
		if (flagTemperaturaMasAlta == 1 || temperatura>temperaturaMasAlta)
		{
			temperaturaMasAlta = temperatura;
			nombreTemperaturaMasAlta = nombre;
			flagTemperaturaMasAlta = 0;
		}

		switch (estadoCivil) 
		{
			case "soltero":
				// Punto C - Cantidad de hombres solteros o viudos.
				if (sexo == "m") 
				{
					cantidadHombresSolteros++;
					edadHombresSolteros += edad;
				}
				break;
			case "viudo":
				// Punto B - Personas viudas mayores de edad.
				if (edad>17) 
				{
					contadorMayoresEdadViudos++;
				}
				// Punto C - Cantidad de hombres solteros o viudos.
				if (sexo == "m") 
				{
					cantidadHombresViudos++;
				}
				break;
		}

		// Punto D - cantidad de personas de la tercera edad con mas de 38 de temperatura.
		if (edad > 60 && temperatura > 38) 
		{
			cantidadViejosTemperaturaAlta++;
		}
	}

	// Punto E - Promedio de edad de hombres solteros.
	if (cantidadHombresSolteros > 0)
	{
		promedioEdadHombresSolteros = edadHombresSolteros / cantidadHombresSolteros;
	}

	document.write("<h2>El nombre de la persona con mas temperatura es: "+nombreTemperaturaMasAlta+"</h2><br>");
	document.write("<h2>La cantidad de personas mayores de edad viudas es: "+contadorMayoresEdadViudos+"</h2><br>");
	document.write("<h2>La cantidad de hombres solteros es "+cantidadHombresSolteros+" y viudos es "+cantidadHombresViudos+"</h2><br>");
	document.write("<h2>La cantidad de personas de la tercera edad con mas de 38 de temperatura es: "+cantidadViejosTemperaturaAlta+"</h2><br>");
	document.write("<h2>El promedio de edad entre los hombres solteros es: "+promedioEdadHombresSolteros+"</h2><br>");
}