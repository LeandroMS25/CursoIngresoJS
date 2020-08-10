/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
*/
function mostrar()
{
    var nombre;
    var edad;
    var altura;
    var sexo;
    var dinero;
    var cantidadDeHijos;
    var acumuladorEdadMujeres;
    var promedioEdadMujeres;
    var contadorMujeres;
    var edadMujerJoven;
    var nombreMujerJoven;
    var edadMasVieja;
    var nombreMasVieja;
    var i;

    acumuladorEdadMujeres = 0;
    contadorMujeres = 0;
    promedioEdadMujeres = 0;

    for (i = 0; i < 3; i++)
    {
        do 
        {
            nombre = prompt("Ingrese el nombre.");    
        } while (!isNaN(nombre));

        do 
        {
            edad = prompt("Ingrese la edad.");
            edad = parseInt(edad);        
        } while (edad<0 || edad>115 || isNaN(edad));

        do 
        {
            altura = prompt("Ingrese la altura.");
            altura = parseInt(altura);        
        } while (altura<30 || altura>230 || isNaN(altura));
        
        do 
        {
            sexo = prompt("Ingrese el sexo.").toLowerCase();
        } while (sexo != "f" && sexo != "m" || !isNaN(sexo));

        do 
        {
            dinero = prompt("Ingrese la cantidad de dinero.");
            dinero = parseFloat(dinero);    
        } while (isNaN(dinero));

        do 
        {
            cantidadDeHijos = prompt("Ingrese la cantidad de hijos.");
            cantidadDeHijos = parseInt(cantidadDeHijos);        
        } while (cantidadDeHijos<0 || cantidadDeHijos>10 || isNaN(cantidadDeHijos));

        if (sexo == "f")
        {
            if (contadorMujeres == 0 || edad<edadMujerJoven) 
            {
                edadMujerJoven = edad;
                nombreMujerJoven = nombre;
            }
            acumuladorEdadMujeres += edad;
            contadorMujeres++;
        }

        if (i == 0 || edad>edadMasVieja)
        {
            edadMasVieja = edad;
            nombreMasVieja = nombre;
        }
    }

    promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;

    console.log("<h2>La persona mas vieja es: "+nombreMasVieja+"</h2><br>");
    
    if (contadorMujeres>0) 
    {
        console.log("<h2>El promedio de edad de las mujeres es: "+promedioEdadMujeres+"</h2><br>");
        console.log("<h2>La mujer mas joven es: "+nombreMujerJoven+"</h2><br>");
    }
    else
    {
        console.log("<h2>No se ingresaron mujeres.</h2><br>");
    }
}
