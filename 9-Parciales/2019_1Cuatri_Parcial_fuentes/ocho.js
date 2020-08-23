/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

function mostrar()
{
    var nombreTitular;
    var lugar;
    var temporada;
    var cantidadViajeros;
    var contadorSalta;
    var contadorBariloche;
    var contadorCataratas;
    var lugarMasElegido;
    var titularConMasViajeros;
    var mayorCantidadViajeros;
    var banderaTitutarConMasViajeros;
    var contadorInvierno;
    var cantidadViajerosInvierno;
    var promedioViajerosInvierno;
    var respuesta;

    respuesta = true;
    contadorSalta = 0;
    contadorBariloche = 0;
    contadorCataratas = 0;
    banderaTitutarConMasViajeros = 0;
    contadorInvierno = 0;
    cantidadViajerosInvierno = 0;

    while (respuesta == true) 
    {
        // Validación de datos
        do 
        {
            nombreTitular = prompt("Ingrese el nombre del titular.");    
        } while (!isNaN(nombreTitular));

        do 
        {
            lugar = prompt("Ingrese el lugar a donde se viajará. Opciones: bariloche, cataratas o salta.");
        } while (lugar != "salta" && lugar != "bariloche" && lugar != "cataratas");

        do 
        {
            temporada = prompt("Ingrese la temporada en la cual se viajará. Opciones: invierno, verano, otoño o primavera.");
        } while (temporada != "invierno" && temporada != "otoño" && temporada != "verano" && temporada != "primavera");

        do 
        {
            cantidadViajeros = prompt("Ingrese la cantidad de gente que viajará.");
            cantidadViajeros = parseInt(cantidadViajeros);
        } while (cantidadViajeros<0 || isNaN(cantidadViajeros));

        // Resolución de consignas
        switch (lugar) 
        {
            case "bariloche":
                contadorBariloche++;
                break;
            case "cataratas":
                contadorCataratas++;
                break;
            case "salta":
                contadorSalta++;
                break;
        }

        // Punto B
        if (banderaTitutarConMasViajeros == 0 || cantidadViajeros>mayorCantidadViajeros)
        {
            mayorCantidadViajeros = cantidadViajeros;
            titularConMasViajeros = nombreTitular
        }

        // Punto C
        if (temporada == "invierno") 
        {
            cantidadViajerosInvierno += cantidadViajeros;
            contadorInvierno++;    
        }

        respuesta = confirm("¿Desea ingresar otra estadía?");    
    }

    // Punta A
    if (contadorBariloche>contadorCataratas && contadorBariloche>contadorSalta) 
    {
        lugarMasElegido = "Bariloche";
    } 
    else
    {
        if (contadorSalta>contadorCataratas) 
        {
            lugarMasElegido = "Salta";
        }  
        else
        {
            lugarMasElegido = "Cataratas";
        }
    }

    promedioViajerosInvierno = cantidadViajerosInvierno / contadorInvierno;

    document.write("<h2>El lugar mas elegido por la gente es: "+lugarMasElegido+"</h2><br>");
    document.write("<h2>El tutilar que lleva mas gente es: "+titularConMasViajeros+"</h2><br>");
    if (cantidadViajerosInvierno>0) 
    {
        document.write("<h2>El promedio de gente que viaja en invierno es: "+promedioViajerosInvierno+"</h2><br>");    
    }
    else
    {
        document.write("<h2>No viajó gente en invierno.</h2><br>");
    }
    
}
