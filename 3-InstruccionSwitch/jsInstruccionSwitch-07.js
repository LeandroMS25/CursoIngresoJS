function mostrar() 
{
	var destino;
	
	destino = document.getElementById('txtIdDestino').value;

	switch (destino) 
	{
		case "Bariloche":
			alert("El destino seleccionado se encuentra en el Oeste.");
			break;
		case "Cataratas":
			alert("El destino seleccionado se encuentra en el Norte.");
			break;
		case "Mar del plata":
			alert("El destino seleccionado se encuentra en el Este.");
			break;
		case "Cordoba":
			alert("El destino seleccionado se encuentra en el Sur.");
			break;
	}

}//FIN DE LA FUNCIÓN