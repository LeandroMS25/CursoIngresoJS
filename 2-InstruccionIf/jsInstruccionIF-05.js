function mostrar() 
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	// PRIMERA FORMA - Mejor forma
	if (edad<13 || edad>17) 
	{
		alert("La persona no es un adolescente.");
	}

	// SEGUNDA FORMA
	if (edad<13) 
	{
		alert("La persona no es un adolescente.");
	} 
	else  
	{
		if (edad>17)
		{
			alert("La persona no es un adolescente.");
		}
	}

	// TERCER FORMA - Ineficiente porque hay un if al pedo
	if (edad>12 && edad<18) 
	{
		
	} 
	else 
	{
		alert("La persona no es un adolescente.");
	}

	// CUARTA FORMA - Usando una negación
	if (!(edad>12 && edad<18)) 
	{
		alert("La persona no es un adolescente.");
	}
}//FIN DE LA FUNCIÓN