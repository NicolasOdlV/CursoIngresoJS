/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
var importe,descuento;
function MostrarAumento()
{
    importe=document.getElementById("importe").value;
    importe=parseInt(importe);
    descuento=parseInt((importe*0.75));
    document.getElementById("resultado").value=descuento;
}
