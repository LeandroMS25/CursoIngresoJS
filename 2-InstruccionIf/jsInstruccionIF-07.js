function mostrar()
{
	var edad;
	var estadoCivilSeleccionado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	estadoCivilSeleccionado = estadoCivil.value;

	// var estadoCivilSeleccionado = estadoCivilSeleccionado.options[estadoCivilSeleccionado.selectedIndex].text;

	// alert(typeof(estadoCivilSeleccionado));

	if(edad<18 && estadoCivilSeleccionado != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}
}//FIN DE LA FUNCIÓN