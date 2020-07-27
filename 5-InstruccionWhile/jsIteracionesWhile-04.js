/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = 10;

	while (numero<0 || numero>9)
	{
		numero = prompt("Por favor, ingrese un número que éste entre 0 y 9, inclusive.");
	}

	document.getElementById('txtIdNumero').value = numero;
}//FIN DE LA FUNCIÓN