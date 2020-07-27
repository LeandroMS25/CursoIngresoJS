function mostrar()
{
	var destino;
	
	destino = document.getElementById('txtIdDestino').value;

	switch (destino) 
	{
		case "Bariloche":
		case "Cordoba":
			alert("En el destino seleccionado hace frío.");
			break;	
		default:
			alert("En el destino seleccionado hace calor.");
			break;
	}

}//FIN DE LA FUNCIÓN