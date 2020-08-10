/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/
function mostrar()
{
    var pais;
    var cantidadHabitantes;
    var temperatura;
    var respuesta;
    var cantidadTempPares;
    var paisMenosHabitantes;
    var cantidadHabitantesMin;
    var cantidadPaisesTempAlta;
    var cantidadPaises;
    var acumuladorHabitantes;
    var promedioHabitantesPorPais;
    var temperaturaMinima;
    var paisTempMinima;

    respuesta = true;
    cantidadTempPares = 0;
    cantidadPaisesTempAlta = 0;
    cantidadPaises = 0;
    acumuladorHabitantes = 0;
    banderaMenosHabitantes = true;

    while (respuesta) 
    {
        do 
        {
            pais = prompt("Ingrese el nombre de un país");
        } while (!isNaN(pais));

        do 
        {
            cantidadHabitantes = prompt("Ingrese la cantidad de habitantes");
            cantidadHabitantes = parseInt(cantidadHabitantes);    
        } while (cantidadHabitantes<1 || cantidadHabitantes>7000 || isNaN(cantidadHabitantes));

        do 
        {
            temperatura = prompt("Ingrese la temperatura mínima del país ingresado");
            temperatura = parseInt(temperatura);    
        } while (temperatura<-50 || temperatura>50 || isNaN(temperatura));

        acumuladorHabitantes += cantidadHabitantes;

        if (temperatura%2 == 0) 
        {
            cantidadTempPares++;
        }

        if (cantidadPaises == 0 || cantidadHabitantes<cantidadHabitantesMin) 
        {
            cantidadHabitantesMin = cantidadHabitantes;
            paisMenosHabitantes = pais;
        }

        if (temperatura>40) 
        {
            cantidadPaisesTempAlta++;
        }

        if (cantidadPaises == 0 || temperatura<temperaturaMinima) 
        {
            temperaturaMinima = temperatura;
            paisTempMinima = pais;
        }

        cantidadPaises++;

        respuesta = confirm("¿Desea ingresar otro país?");
    }

    promedioHabitantesPorPais = acumuladorHabitantes / cantidadPaises;

    document.write("<h2>La cantidad de temperaturas pares es: "+cantidadTempPares+"</h2><br>");
    document.write("<h2>El país con menos habitantes es: "+paisMenosHabitantes+"</h2><br>");
    document.write("<h2>La cantidad de países con temperatura mayor a 40 es: "+cantidadPaisesTempAlta+"</h2><br>");
    document.write("<h2>El promedio de habitantes entre los países ingresados es: "+promedioHabitantesPorPais+"</h2><br>");
    document.write("<h2>El país con la temperatura mínima ingresada es: "+paisTempMinima+"</h2><br>");
}
