/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var ancho;
var largo;
var radio;
var rectanguloAlambre;
var circuloAlambre;
var contrapiso;
var bolsaCemento;
var bolsaCal;
function Rectangulo () 
{
    ancho=parseInt(document.getElementById("Ancho").value);
    largo=parseInt(document.getElementById("Largo").value);
    rectanguloAlambre=parseInt(6*(ancho+largo));
    alert("Necesita "+rectanguloAlambre+" metros de alambre");
}
function Circulo () 
{
    radio=parseInt(document.getElementById("Radio").value);
    circuloAlambre=parseInt(6*radio*Math.PI);
    alert("Necesita "+circuloAlambre+" metros de alambre");
}
function Materiales () 
{
    ancho=parseInt(document.getElementById("Ancho").value);
    largo=parseInt(document.getElementById("Largo").value);
    contrapiso=parseInt(ancho*largo);
    bolsaCemento=parseInt(contrapiso*2);
    bolsaCal=parseInt(contrapiso*3);
    alert("Usted necesita "+bolsaCal+" bolsas de cal y "+bolsaCemento+" bolsas de cemento, para un area de "+contrapiso+" m2");
}