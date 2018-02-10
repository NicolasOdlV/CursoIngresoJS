//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
var ancho,largo,perimetro,metrosDeAlambre;
function Mostrar()
{
	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	perimetro=parseInt(2*(ancho+largo));
	metrosDeAlambre=parseInt(perimetro*6);
	alert("Necesita "+metrosDeAlambre+" metros de alambre");
}

