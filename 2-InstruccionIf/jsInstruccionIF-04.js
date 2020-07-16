function mostrar() {
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad > 12 && edad < 18) {
		alert("La persona es adolescente.");
	}
}//FIN DE LA FUNCIÓN