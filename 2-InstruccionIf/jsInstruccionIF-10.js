function mostrar()
{
	var notaExamen;

	notaExamen = Math.random()*10;

	notaExamen = notaExamen.toFixed(0);

	if(notaExamen>8){
		alert("La nota fue: " + notaExamen + " ¡EXCELENTE!");
	} else if (notaExamen>3 && notaExamen<9){
		alert("La nota fue: " + notaExamen + " ¡APROBÓ!");
	} else if (notaExamen<4){
		alert("La nota fue: " + notaExamen + " ¡Vamos, la proxima se puede!");
	}

}//FIN DE LA FUNCIÓN