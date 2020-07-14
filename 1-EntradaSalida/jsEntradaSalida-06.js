/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var suma;
	var numeroUno;
	var numeroDos;

	//numeroUno = txtIdNumeroUno.value;
	numeroUno = document.getElementById("txtIdNumeroUno").value; // Busca el ID dentro del html.
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;
	//suma = parseInt(numeroUno) + parseInt(numeroDos);// Hay que usar la funcion parseInt porque el signo + tiene doble funcion.
	
	alert("La suma es: " + suma);
}

