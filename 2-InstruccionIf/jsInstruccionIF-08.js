function mostrar()
{
	var edad;
	var estadoCivilSeleccionado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	estadoCivilSeleccionado = estadoCivil.value;

	//var estadoCivilSeleccionado = estadoCivilSeleccionado.options[estadoCivilSeleccionado.selectedIndex].text;
	if (edad>17 && estadoCivilSeleccionado == "Soltero") 
	{
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN