/*
Leandro Sobrino
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene 
un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/ 
function mostrar() 
{
	let precioEstadia;
	let destino;
	let estacion;
	let precioFinal;
	let porcentaje;

	destino = document.getElementById('txtIdDestino').value;
	estacion = document.getElementById('txtIdEstacion').value;

	precioEstadia = 15000;
	
	// SWITCH/IF
	/*
	switch (destino)
	{
		case "Bariloche":
			if (estacion == "Invierno") 
			{
				porcentaje = 0.2;
			}
			else
			{
				if (estacion == "Verano") 
				{
					porcentaje = -0.2;
				}
				else
				{
					porcentaje = 0.1;
				}
			}
			break;
		case "Mar del plata":
			if (estacion == "Invierno") 
			{
				porcentaje = -0.2;
			}
			else
			{
				if (estacion == "Verano") 
				{
					porcentaje = 0.2;
				}
				else
				{
					porcentaje = 0.1;
				}
			}
			break;
		default:
			if (estacion == "Invierno") 
			{
				porcentaje = -0.1;
			}
			else
			{
				if (estacion == "Verano") 
				{
					porcentaje = 0.1;
				}
				else
				{
					if (destino == "Cataratas") 
					{
						porcentaje = 0.1;
					}
					else
					{
						porcentaje = 0;
					}
				}
			}
	}
	*/
	
	// SOLO SWITCH
	switch (destino)
	{
		case "Bariloche":
			switch (estacion)
			{
				case "Invierno":
					porcentaje = 0.2;
					break;
				case "Verano":
					porcentaje = -0.2;
					break;
				default:
					porcentaje = 0.1;
			} 
			break;
		case "Mar del plata":
			switch (estacion)
			{
				case "Invierno":
					porcentaje = -0.2;
					break;
				case "Verano":
					porcentaje = 0.2;
					break;
				default:
					porcentaje = 0.1;
			} 
			break;
		default:
			switch (estacion)
			{
				case "Invierno":
					porcentaje = -0.1;
					break;
				case "Verano":
					porcentaje = 0.1;
					break;
				default:
					switch (destino) 
					{
						case "Cataratas":
							porcentaje = 0.1;
							break;
						case "Cordoba":
							porcentaje = 0;
							break;
					}
			} 
	}

	precioFinal = precioEstadia + (precioEstadia * porcentaje);
	
	alert("El precio que debe abonar es: $"+precioFinal);
}//FIN DE LA FUNCIÓN