/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var centigrados;
    var fahrenheit;

    temperatura = txtIdTemperatura.value;

    fahrenheit = temperatura;
    fahrenheit = parseInt(fahrenheit);

    centigrados = (fahrenheit - 32) / 1.8;

    alert(fahrenheit + " fahrenheit son: " + centigrados + " grados centigrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var centigrados;
    var fahrenheit;

    temperatura = txtIdTemperatura.value;

    centigrados = temperatura;
    centigrados = parseInt(centigrados);

    fahrenheit = centigrados * 1.8 + 32;

    alert(centigrados + " centigrados son: " + fahrenheit + " grados fahrenheit");
}
