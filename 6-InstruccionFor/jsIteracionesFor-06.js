function mostrar()
{
	var numeroIngresado;
	var cantidadPares;

	cantidadPares = 0;
	
	numeroIngresado = prompt("Ingrese un número.");

	for (var i = 1;i < numeroIngresado;i++) 
	{
		if(i%2 == 0)
		{
			alert(i);
			cantidadPares++;
		}
	}

	alert("La cantidad de números pares encontrados es: "+cantidadPares);
}//FIN DE LA FUNCIÓN