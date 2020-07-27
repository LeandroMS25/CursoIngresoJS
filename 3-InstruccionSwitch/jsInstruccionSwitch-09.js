function mostrar() 
{
	let precioEstadia;
	let destino;
	let estacion;
	let precioFinal;
	let descuento;
	let aumento;

	destino = document.getElementById('txtIdDestino').value;
	estacion = document.getElementById('txtIdEstacion').value;

	precioEstadia = 15000;
	descuento = 0;
	aumento = 0;

	switch (destino)
	{
		case "Bariloche":
			if (estacion == "Invierno") 
			{
				aumento = 0.2;
			}
			else
			{
				if (estacion == "Verano") 
				{
					descuento = 0.2;
				}
				else
				{
					aumento = 0.1;
				}
			}
			break;
		case "Mar del plata":
			if (estacion == "Invierno") 
			{
				descuento = 0.2;
			}
			else
			{
				if (estacion == "Verano") 
				{
					aumento = 0.2;
				}
				else
				{
					aumento = 0.1;
				}
			}
			break;
		default:
			if (estacion == "Invierno") 
			{
				descuento = 0.1;
			}
			else
			{
				if (estacion == "Verano") 
				{
					aumento = 0.1;
				}
				else
				{
					if (destino == "Cataratas") 
					{
						aumento = 0.1;
					}	
					
				}
			}
			break;
	}

	precioFinal = precioEstadia + (precioEstadia * aumento) - (precioEstadia * descuento)
	
	alert("El precio que debe abonar es: $"+precioFinal);
}//FIN DE LA FUNCIÓN