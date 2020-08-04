/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese su clave: ");

	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt("ERROR! Reingrese su clave: ");
	}
	
	alert("La clave ingresada es correcta.");
	
}//FIN DE LA FUNCIÓN
