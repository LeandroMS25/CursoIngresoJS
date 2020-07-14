/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// var numeroUno;
// var numeroDos;

// numeroUno = txtIdNumeroUno.value;
// numeroDos = txtIdNumeroDos.value;

// numeroUno = parseInt(numeroUno);
// numeroDos = parseInt(numeroDos);

function sumar()
{	
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var suma;

	suma = numeroDos + numeroUno;

	alert("La suma es: " + suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	var resta;

	resta = numeroUno - numeroDos;

	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var multiplicacion;

	multiplicacion = numeroUno * numeroDos;

	alert("La multiplicacion es: " + multiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	var division;

	division = numeroUno / numeroDos;

	alert("La division es: " + division);
}

