/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	while (sexoIngresado != "Femenino" && sexoIngresado != "Masculino")
	{
		sexoIngresado = prompt("Ingrese Femenino o Masculino dependiendo su sexo.");
	}

	document.getElementById('txtIdSexo').value = sexoIngresado;
}//FIN DE LA FUNCIÓN