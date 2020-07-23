function mostrar()
{
	var month;

	month = document.getElementById('txtIdMes').value;

	switch (month)
	{
		case "Enero":
			alert("Que comiences bien el año!!");
			break;
		case "Marzo":
			alert("A clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!");
			break;
		default:
			alert("Meses de mierda.");
			break;
	}
}//FIN DE LA FUNCIÓN