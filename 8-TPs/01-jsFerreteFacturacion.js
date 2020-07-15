/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioPrimerProducto;
    var precioSegundoProducto;
    var precioTercerProducto;
    var suma;

    precioPrimerProducto = txtIdPrecioUno.value;
    precioSegundoProducto = txtIdPrecioDos.value;
    precioTercerProducto = txtIdPrecioTres.value;

    precioPrimerProducto = parseInt(precioPrimerProducto);
    precioSegundoProducto = parseInt(precioSegundoProducto);
    precioTercerProducto = parseInt(precioTercerProducto);

    suma = precioPrimerProducto + precioSegundoProducto + precioTercerProducto;

    alert("La suma de los tres precios da: " + suma);
}
function Promedio () 
{
	var precioPrimerProducto;
    var precioSegundoProducto;
    var precioTercerProducto;
    var precioPromedio;

    precioPrimerProducto = txtIdPrecioUno.value;
    precioSegundoProducto = txtIdPrecioDos.value;
    precioTercerProducto = txtIdPrecioTres.value;

    precioPrimerProducto = parseInt(precioPrimerProducto);
    precioSegundoProducto = parseInt(precioSegundoProducto);
    precioTercerProducto = parseInt(precioTercerProducto);

    precioPromedio = (precioPrimerProducto + precioSegundoProducto + precioTercerProducto) / 3;

    precioPromedio = precioPromedio.toFixed(2); 

    alert("El promedio entre los tres precios da: " + precioPromedio);
}
function PrecioFinal () 
{
	var precioPrimerProducto;
    var precioSegundoProducto;
    var precioTercerProducto;
    var iva;

    precioPrimerProducto = txtIdPrecioUno.value;
    precioSegundoProducto = txtIdPrecioDos.value;
    precioTercerProducto = txtIdPrecioTres.value;

    precioPrimerProducto = parseInt(precioPrimerProducto);
    precioSegundoProducto = parseInt(precioSegundoProducto);
    precioTercerProducto = parseInt(precioTercerProducto);

    iva = 0.21;
    suma = precioPrimerProducto + precioSegundoProducto + precioTercerProducto;

    precioConIva = suma + (suma * iva);

    alert("El precio final es: " + precioConIva);
}