/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	
	// LA FORMA DEL PROFESOR
	numeroIngresado = prompt("Por favor, ingrese un número que éste entre 0 y 9, inclusive.");
	numeroIngresado = parseInt(numeroIngresado);

	// MI FORMA
	
	//numeroIngresado = 10;

	while (numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("ERROR! Reingrese un número que éste entre 0 y 9, inclusive.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
}//FIN DE LA FUNCIÓN