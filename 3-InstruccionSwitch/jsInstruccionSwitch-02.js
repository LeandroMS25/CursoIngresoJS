function mostrar()
{
	var month;

	month = document.getElementById('txtIdMes').value;

	switch (month) 
	{
		case "Julio":
		case "Agosto":	
			alert("Abrigate que hace frío!");
			break;	
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("UFF, safamos");
			break;
		default:	
			alert("Se viene el coronavirus la puta madre!");
			break;
	}
}//FIN DE LA FUNCIÓN