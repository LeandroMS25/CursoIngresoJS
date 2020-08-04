/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var flag;
	
	respuesta = true;
	flag = 0;

	while (respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número cualquiera.");
		numeroIngresado = parseInt(numeroIngresado);

		if (flag == 0)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = 1;
		}
		else
		{
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if (numeroIngresado<numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}	
			}
		} 	
		respuesta =	confirm("¿Desea ingresar otro número?");
	}
	
	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}//FIN DE LA FUNCIÓN