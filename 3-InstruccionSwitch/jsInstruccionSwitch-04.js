function mostrar()
{
	var month;

	month = document.getElementById('txtIdMes').value;

	switch (month) 
	{
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":	
			alert("Este mes tiene 30 días.");
			break;
		default:	
			alert("Este mes tiene 31 días.");
			break;
	}
}//FIN DE LA FUNCIÓN