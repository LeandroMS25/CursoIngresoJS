function mostrar() {
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad < 13 || edad > 17) {
		alert("La persona no es un adolescente.")
	}
}//FIN DE LA FUNCIÓN