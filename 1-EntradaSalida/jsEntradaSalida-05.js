/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	nombreIngresado=txtIdNombre.value;// Las variables txtId.value se pueden obtener al tocar inspeccionar en la interfaz.
	edadIngresada=txtIdEdad.value;

	// alert("Su nombre es: "+nombreIngresado)
	// alert("Usted tiene: "+edadIngresada+" años")
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años ");
}

