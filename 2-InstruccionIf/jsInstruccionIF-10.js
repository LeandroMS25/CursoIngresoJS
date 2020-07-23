/*
Leandro Sobrino
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
*/
function mostrar()
{
	var notaExamen;

	notaExamen = Math.floor(Math.random()*10) + 1;

	if(notaExamen>8)
	{
		alert("¡EXCELENTE!");
	} 
	else 
	{	
		if (notaExamen>3) 
		{
			alert("¡APROBÓ!");
		}
		else 
		{
			alert("¡Vamos, la proxima se puede!");
		}		
	}
}//FIN DE LA FUNCIÓN