/*
Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/
function mostrar()
{
    var sexo;
    var altura;
    var edad;
    var nombre;
    var respuesta;
    var banderaMujerAlta;
    var nombreMujerAlta;
    var alturaMaximaMujer;
    var banderaHombreViejo;
    var nombreHombreViejo;
    var edadHombreViejo;
    var banderaPrimerPibe;
    var nombrePrimerPibe;

    respuesta = true;
    banderaPrimerPibe = 1;
    banderaMujerAlta = 1;
    banderaHombreViejo = 1;

    while (respuesta == true) 
    {
        do 
        {
            nombre = prompt("Ingrese el nombre de la persona.");
        } while (!isNaN(nombre));

        do
        {
            sexo = prompt("Ingrese el sexo.");
        } while (!isNaN(sexo) || sexo != "f" && sexo != "m");

        do 
        {
            altura = prompt("Ingrese la altura en cm (110 a 210).");
            altura = parseInt(altura);           
        } while (altura<110 || altura>210 || isNaN(altura));

        do 
        {
            edad = prompt("Ingrese la edad (1 a 100).");
            edad = parseInt(edad);           
        } while (edad<1 || edad>100 || isNaN(edad));

        if (sexo == "f" && (banderaMujerAlta == 1 || altura>alturaMaximaMujer))
        {
            alturaMaximaMujer = altura;
            nombreMujerAlta = nombre;
            banderaMujerAlta = 0;
        }
        else
        {
            if (sexo == "m" && (banderaHombreViejo == 1 || edad>edadHombreViejo))
            {
                edadHombreViejo = edad;
                nombreHombreViejo = nombre;
                banderaHombreViejo = 0;
            }
        }

        if (edad>12 && edad<18 && banderaPrimerPibe == 1) 
        {
            nombrePrimerPibe = nombre;
            banderaPrimerPibe = 0;
        }

        respuesta = confirm("¿Desea ingresar otro espectador?");
    }

    if (banderaMujerAlta != 1) 
    {
        console.log("<h2>La mujer mas alta es: "+nombreMujerAlta+"</h2><br>");
    }
    else
    {
        console.log("<h2>No se ingresaron mujeres.</h2><br>");
    }

    if (banderaHombreViejo != 1) 
    {
        console.log("<h2>El hombre mas viejo es: "+nombreHombreViejo+"</h2><br>");
    }
    else
    {
        console.log("<h2>No se ingresaron hombres.</h2><br>");
    }
    
    if (banderaPrimerPibe != 1) 
    {
        console.log("<h2>El primer adolescente es: "+nombrePrimerPibe+"</h2><br>");
    }
    else
    {
        console.log("<h2>No se ingresaron adolescentes.</h2><br>");
    }
    

}
