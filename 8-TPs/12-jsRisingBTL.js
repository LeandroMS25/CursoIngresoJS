/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada 
e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoIngresado;
	var legajoIngresado;
	var nacionadalidIngresada;

	edadIngresada = prompt("Ingrese su edad (18-90).");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada<18 || edadIngresada>90 || isNaN(edadIngresada))
	{
		edadIngresada = prompt("Reingrese su edad (18-90).");
		edadIngresada = parseInt(edadIngresada);
	}
	
	document.getElementById('txtIdEdad').value = edadIngresada;

	sexoIngresado = prompt("Ingrese el sexo (F o M).");

	while (sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("ERROR! Ingrese el sexo (F o M).");
	}

	document.getElementById('txtIdSexo').value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese su estado civil. Opciones: \n 1- Soltero \n 2- Casado \n 3- Divorciado \n 4- Viudo.");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while(estadoCivilIngresado<1 || estadoCivilIngresado>4 || isNaN(estadoCivilIngresado))
	{
		estadoCivilIngresado = prompt("Ingrese su estado civil. Opciones: \n 1- Soltero \n 2- Casado \n 3- Divorciado \n 4- Viudo.");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	switch (estadoCivilIngresado) 
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		default:
			estadoCivilIngresado = "Viudo";
	}

	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;

	sueldoIngresado = prompt("Ingrese su sueldo bruto.");
	sueldoIngresado = parseInt(sueldoIngresado);

	while(sueldoIngresado<8000 || isNaN(sueldoIngresado))
	{
		sueldoIngresado = prompt("Reingrese su sueldo bruto.");
		sueldoIngresado = parseInt(sueldoIngresado);
	}

	document.getElementById('txtIdSueldo').value = sueldoIngresado;

	legajoIngresado = prompt("Ingrese su legajo.");
	legajoIngresado = parseInt(legajoIngresado);

	while(legajoIngresado<1000 || legajoIngresado>9999 || isNaN(legajoIngresado))
	{
		legajoIngresado = prompt("Reingrese su legajo.");
		legajoIngresado = parseInt(legajoIngresado);
	}

	document.getElementById('txtIdLegajo').value = legajoIngresado;

	nacionadalidIngresada = prompt("Ingrese su nacionalidad. Opciones: \n A- Argentino \n E- Extranjero \n N- Nacionalizado.");

	while(nacionadalidIngresada != "A" && nacionadalidIngresada != "E" && nacionadalidIngresada != "N")
	{
		nacionadalidIngresada = prompt("Reingrese su nacionalidad. Opciones: \n A- Argentino \n E- Extranjero \n N- Nacionalizado.");
	}

	switch (nacionadalidIngresada) 
	{
		case "A":
			nacionadalidIngresada = "Argentino";				
			break;
		case "E":
			nacionadalidIngresada = "Extranjero";
			break;
		default:
			nacionadalidIngresada = "Nacionalizado";
	}

	document.getElementById('txtIdNacionalidad').value = nacionadalidIngresada;
}
