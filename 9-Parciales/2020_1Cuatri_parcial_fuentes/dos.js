/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var tipoProducto;
  var cantidadBolsas;
  var precioPorBolsa;
  var cantidadCemento;
  var cantidadCal;
  var cantidadArena;
  var tipoConMasCantidad;
  var cantidadMayor;
  var tipoMasCaro;
  var flagTipoMasCaro;
  var precioMasCaro;
  var precioTotalSinDescuento;
  var precioTotalConDescuento;
  var acumuladorBolsas;
  var respuesta;
  var descuento;

  cantidadMayor = 0;
  precioTotalSinDescuento = 0;
  acumuladorBolsas = 0;
  cantidadCemento = 0;
  cantidadCal = 0;
  cantidadArena = 0;
  flagTipoMasCaro = 1;
  respuesta = true;

  while (respuesta == true) 
  {
    tipoProducto = prompt("Ingrese el tipo de producto que desea comprar.");

    while (tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento" || !isNaN(tipoProducto)) 
    {
      tipoProducto = prompt("Reingrese el tipo de producto que desea comprar.");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas que requiere.");
    cantidadBolsas = parseInt(cantidadBolsas);

    while (isNaN(cantidadBolsas)) 
    {
      cantidadBolsas = prompt("Reingrese la cantidad de bolsas que requiere.");
      cantidadBolsas = parseInt(cantidadBolsas);  
    }

    precioPorBolsa = prompt("Ingrese el precio de cada bolsa.");
    precioPorBolsa = parseInt(precioPorBolsa);

    while (isNaN(precioPorBolsa) || precioPorBolsa<1) 
    {
      precioPorBolsa = prompt("Reingrese el precio de cada bolsa");
      precioPorBolsa = parseInt(precioPorBolsa);  
    }

    precioTotalSinDescuento += (precioPorBolsa * cantidadBolsas);

    acumuladorBolsas += cantidadBolsas;

    if (acumuladorBolsas>30)
    {
      descuento = 0.75;
    }
    else
    {
      if (acumuladorBolsas>10) 
      {
        descuento = 0.85;
      }
    }

    switch (tipoProducto) 
    {
      case "arena":
        cantidadArena += cantidadBolsas;
        if (cantidadArena>cantidadMayor) 
        {
        tipoConMasCantidad = "Arena";
        cantidadMayor = cantidadArena;
        }
        break;
      case "cal":
        cantidadCal += cantidadBolsas;
        if (cantidadCal>cantidadMayor)
        {
          tipoConMasCantidad = "Cal";
          cantidadMayor = cantidadCal;
        }
        break;
      case "cemento":
        cantidadCemento += cantidadBolsas;
        if (cantidadCemento>cantidadMayor) 
        {
          tipoConMasCantidad = "Cemento";
          cantidadMayor = cantidadCemento;
        }
        break;
    }

    if (flagTipoMasCaro == 1 || precioPorBolsa>precioMasCaro)
    {
      precioMasCaro = precioPorBolsa;
      tipoMasCaro = tipoProducto;
      flagTipoMasCaro = 0;
    }

    respuesta = confirm("¿Desea ingresar otro producto a su compra?");
  }

  precioTotalConDescuento = precioTotalSinDescuento * descuento;  

  document.write("<h2>El precio total sin descuento es: "+precioTotalSinDescuento+"</h2><br>");
  if (descuento>0) 
  {
    document.write("<h2>El precio total con descuento es: "+precioTotalConDescuento+"</h2><br>"); 
  }
  else
  {
    document.write("<h2>La cantidad de bolsas compradas no tiene descuento</h2><br>");
  }
  document.write("<h2>El tipo de producto con mas cantidad es: "+tipoConMasCantidad+"</h2><br>");
  document.write("<h2>El tipo de producto mas caro es: "+tipoMasCaro+"</h2><br>");
}
