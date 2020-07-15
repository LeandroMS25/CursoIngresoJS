/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	var numeroDividendo;
	var numeroDivisor;
	//var cociente;
	var resto;	

	numeroDividendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);
	
	resto = numeroDividendo % numeroDivisor;

	// cociente = numeroDividendo / numeroDivisor;
	// cociente = parseInt(cociente);

	// resto = numeroDividendo - (numeroDivisor * cociente);

	alert("El resto es: " + resto);
}

// Aritmeticos: +, -, /, * y %.