function mostrar()
{
	var hour;

	hour = document.getElementById("txtIdHora").value;

	hour = parseInt(hour);

	switch (hour) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			break;
	}
}//FIN DE LA FUNCIÓN