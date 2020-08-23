/*
Leandro Sobrino
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay) 
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
    // Variables
    var nombre;
    var temperatura;
    var sexo;
    var edad;
    var cantidadFemenino;
    var cantidadMasculino;
    var nombreMujerTempAlta;
    var tempMaxMujer;
    var acumuladorEdad;
    var promedioEdadPacientes;
    var contador;

    // Inicializar variables
    cantidadFemenino = 0;
    cantidadMasculino = 0;
    acumuladorEdad = 0;

    for (contador = 0; contador < 5; contador++) 
    {
        // Validar datos
        do 
        {
            nombre = prompt("Ingrese el nombre del paciente.");
        } while (!isNaN(nombre));
       
        do 
        {
            temperatura = prompt("Ingrese la temperatura del paciente.");
            temperatura = parseInt(temperatura);
        } while (temperatura<35 || temperatura>42 || isNaN(temperatura));
      
        do 
        {
            sexo = prompt("Ingrese el sexo del paciente. Opciones: f o m.");
        } while (sexo != "f" && sexo != "m");

        do 
        {
            edad = prompt("Ingrese la edad del paciente.");
            edad = parseInt(edad);
        } while (edad<1 || edad>100 || isNaN(edad));

        // Punto A
        if (sexo == "f") 
        {
            // Punto C
            if (cantidadFemenino == 0 || temperatura>tempMaxMujer) 
            {
                tempMaxMujer = temperatura;
                nombreMujerTempAlta = nombre;
            }
            cantidadFemenino++;
        }
        else
        {
            cantidadMasculino++;
        }

        acumuladorEdad += edad;
    }

    // Punto B
    promedioEdadPacientes = acumuladorEdad / contador;

    if (cantidadFemenino>0)
    {
        if (cantidadMasculino>0) 
        {
            document.write("<h2>Hay "+cantidadFemenino+" mujeres y "+cantidadMasculino+" hombres ingresados en el hospital.</h2><br>");    
        }
        else
        {
            document.write("<h2>Hay "+cantidadFemenino+" mujeres ingresados en el hospital.</h2><br>");
        }
        document.write("<h2>La mujer con la temperatura mas alta es: "+nombreMujerTempAlta+"</h2><br>");
    }
    else
    {
        document.write("<h2>Hay "+cantidadMasculino+" hombres ingresados en el hospital.</h2><br>");
        document.write("<h2>No se ingreseraon mujeres.</h2><br>");
    }
    document.write("<h2>La edad promedio de las personas ingresadas es: "+promedioEdadPacientes+"</h2><br>");
    

}
