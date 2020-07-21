function mostrar()
{
	var edad;
	var estadoCivil;
	var estadoCivilSeleccionado;

	edad = parseInt(edad);

	edad = txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil");

	var estadoCivilSeleccionado = estadoCivil.options[estadoCivil.selectedIndex].text;

	if(edad<18 && estadoCivilSeleccionado != "Soltero")
	{
        alert("Creo que no hay que hacer nada.");
	} 
	else 
	{
		if (edad>17 && estadoCivilSeleccionado == "Soltero")
		{
			alert("Es soltero y no es menor.");
		}	
	}
}//FIN DE LA FUNCIÓN