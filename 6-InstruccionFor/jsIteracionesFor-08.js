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
			cantidadDivisores++;
		}
	}

	if (cantidadDivisores>0 && cantidadDivisores<2) 
	{
		alert("El número ingresado es primo.");
	}
}//FIN DE LA FUNCIÓN