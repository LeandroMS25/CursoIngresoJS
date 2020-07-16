function mostrar() {
	var edad;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if (edad>17) { //Es mas conveniente poner mayor a 17 que mayor o igual a 18.
		alert("La persona es mayor de edad");
	}
}//FIN DE LA FUNCIÓN