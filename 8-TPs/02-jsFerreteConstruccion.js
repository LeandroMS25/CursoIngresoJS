/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var area;
    var cantidadAlambre;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    cantidadAlambre = area * 3;

    alert("La cantidad de alambre que se debe comprar es: " + cantidadAlambre);
}
function Circulo () 
{
    var radio;
    var pi; 
    var circunferencia;
    var cantidadAlambre;

    radio = txtIdRadio.value;
    radio = parseInt(radio);
    
    pi = 3.14;

    circunferencia = 2 * pi * radio;

    cantidadAlambre = circunferencia * 3;

    cantidadAlambre = parseInt(cantidadAlambre);

    alert("La cantidad de alambre que se debe comprar es: " + cantidadAlambre);
}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var bolsaCemento;
    var bolsaCal;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    bolsaCemento = area * 2;
    bolsaCal = area * 3;

    alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.")
}