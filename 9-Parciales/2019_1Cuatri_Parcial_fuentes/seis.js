/*
Leandro Sobrino
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar()
{
    var marca;
    var precio;
    var peso;
    var tipo;
    var respuesta;
    var acumuladorPeso;
    var marcaLiquidoCaro;
    var precioLiquidoCaro;
    var banderaLiquidoCaro;
    var marcaSolidoLiviano;
    var pesoSolidoLiviano;
    var banderaSolidoLiviano;

    respuesta = true;
    acumuladorPeso = 0;
    banderaLiquidoCaro = 0;
    banderaSolidoLiviano = 0;

    while (respuesta == true) 
    {
        marca = prompt("Ingrese la marca del producto");

        precio = prompt("Ingrese el precio del producto.");
        precio = parseFloat(precio);

        while (precio<0 || isNaN(precio))
        {
        precio = prompt("ERROR! Reingrese el precio del producto.");
        precio = parseFloat(precio);
        }

        peso = prompt("Ingrese el peso del producto.");
        peso = parseInt(peso);

        while (peso<0 || isNaN(peso))
        {
        peso = prompt("ERROR! Reingrese el peso del producto.");
        peso = parseInt(peso);
        }

        tipo = prompt("Ingrese el tipo del producto. Opciones: solido o liquido");
        
        while (tipo != "solido" && tipo != "liquido")
        {
        tipo = prompt("ERROR! Reingrese el tipo del producto. Opciones: solido o liquido");
        }

        // Punto A
        acumuladorPeso += peso;

        switch (tipo) 
        {
            // Punto B
            case "liquido":
                if (banderaLiquidoCaro == 0 || precio>precioLiquidoCaro)
                {
                    precioLiquidoCaro = precio;
                    marcaLiquidoCaro = marca;
                    banderaLiquidoCaro = 1;
                }
                break;
            // Punto C 
            case "solido":
                if (banderaSolidoLiviano == 0 || peso<pesoSolidoLiviano)
                {
                    pesoSolidoLiviano = peso;
                    marcaSolidoLiviano = marca;
                    banderaSolidoLiviano = 1;
                }
                break;
        }

        respuesta = confirm("¿Desea ingresar otro producto?");
    }

    document.write("<h2>El peso total de la compra es: "+acumuladorPeso+"</h2><br>");
    if (banderaLiquidoCaro != 0) {
        document.write("<h2>La marca del liquido mas caro es: "+marcaLiquidoCaro+"</h2><br>");
    }
    else
    {
        document.write("<h2>No se ingresaron liquidos.</h2><br>");
    }

    if (banderaSolidoLiviano != 0) {
        document.write("<h2>La marca del solido mas liviano es: "+marcaSolidoLiviano+"</h2><br>");
    }
    else
    {
        document.write("<h2>No se ingresaron solidos.</h2><br>");
    }
    
    
    

}
