/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var centigrados;
    var fahrenheit;

    fahrenheit = txtIdTemperatura.value;
    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) / 1.8;

    alert(fahrenheit + " fahrenheit son: " + centigrados.toFixed(1) + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var fahrenheit;

    centigrados = txtIdTemperatura.value;
    centigrados = parseFloat(centigrados);

    fahrenheit = centigrados * 1.8 + 32;

    alert(centigrados + " centigrados son: " + fahrenheit.toFixed(1) + " grados fahrenheit");
}
