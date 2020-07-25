/*
Leandro Sobrino
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioLamparas;
    var descuento;
    var precioSinDescuento;
    var precioConDescuento;
    var precioTotal;
    var ingresosBrutos;

    precioLamparas = 35;
    ingresosBrutos = 0;
    descuento = 0;
    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);
    
    marcaSeleccionada = Marca.value;
    
    // IF
    /*
    if (cantidadLamparas>5)
    {
        descuento = 0.5;
    } 
    else 
    {
        if (cantidadLamparas == 5) 
        {
            if (marcaSeleccionada == "ArgentinaLuz") 
            {
                descuento = 0.4;
            }
            else 
            {
                descuento = 0.3;
            }
        }
        else 
        {
            if (cantidadLamparas == 4) 
            {
                if (marcaSeleccionada == "ArgentinaLuz" || marcaSeleccionada == "FelipeLamparas") 
                {
                    descuento = 0.25;
                }
                else 
                {
                    descuento = 0.2;
                }
            }
            else 
            {
                if (cantidadLamparas == 3) 
                {
                    if (marcaSeleccionada == "ArgentinaLuz") 
                    {
                        descuento = 0.15;
                    } 
                    else 
                    {   
                        if (marcaSeleccionada == "FelipeLamparas") 
                        {
                            descuento = 0.1;
                        } 
                        else
                        {
                            descuento = 0.05;
                        }
                    }
                }              
            }
        }
    }
    */

    // SWITCH
    switch (cantidadLamparas) 
    {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:    
            switch (marcaSeleccionada) 
            {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;
                case "FelipeLamparas":   
                    descuento = 0.1;
                    break;
                default:
                    descuento = 0.05;
                    break;
            }
            break;
        case 4:
            switch (marcaSeleccionada) 
            {
                case "ArgentinaLuz": 
                case "FelipeLamparas": 
                    descuento = 0.25;
                    break; 
                default:
                    descuento = 0.2;
                    break;
            }
            break;
        case 5:
            switch (marcaSeleccionada) 
            {
                case "ArgentinaLuz": 
                    descuento = 0.4;
                    break;
                default:
                    descuento = 0.3;
                    break;
            }
            break;
        default:
            descuento = 0.5;
            break;
            
    }

    precioSinDescuento = cantidadLamparas * precioLamparas;

    precioConDescuento = precioSinDescuento - (precioSinDescuento * descuento);

    if (precioConDescuento>120)
    {
        ingresosBrutos = precioConDescuento * 0.1;
        alert("Usted pagó $"+ingresosBrutos+" de IIBB.");
    }
    
    precioTotal = precioConDescuento + ingresosBrutos;
    
    document.getElementById('txtIdprecioDescuento').value = precioTotal;
}
