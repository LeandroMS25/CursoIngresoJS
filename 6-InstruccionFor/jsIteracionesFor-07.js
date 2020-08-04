function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;

	cantidadDivisores = 0;
	
	numeroIngresado = prompt("Ingrese un número.");

	for (var i = 1;i < numeroIngresado;i++) 
	{
		if(numeroIngresado%i == 0)
		{
			alert(i);
			cantidadDivisores++;
		}
	}

	alert("La cantidad de números divisores encontrados es: "+cantidadDivisores);
}//FIN DE LA FUNCIÓN