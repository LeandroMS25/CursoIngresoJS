function mostrar() 
{
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	// PRIMER FORMA
	if (edad > 12 && edad < 18) 
	{
		alert("La persona es adolescente.");
	}

	// SEGUNDA FORMA
	if (edad>12) 
	{
		if (edad<18) 
		{
			alert("La persona es adolescente.");
		}
	}
}//FIN DE LA FUNCIÓN