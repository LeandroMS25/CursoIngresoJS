function mostrar()
{
	var edad;
	var estadoCivil;
	var estadoCivilSeleccionado;

	edad = parseInt(edad);

	edad = txtIdEdad.value;
	estadoCivil = document.getElementById("estadoCivil");

	var estadoCivilSeleccionado = estadoCivil.options[estadoCivil.selectedIndex].text;

	//alert(typeof(estadoCivilSeleccionado));

	if(edad<18 && estadoCivilSeleccionado != "Soltero"){
		alert("Es muy pequeño para no ser soltero");
	}
}//FIN DE LA FUNCIÓN