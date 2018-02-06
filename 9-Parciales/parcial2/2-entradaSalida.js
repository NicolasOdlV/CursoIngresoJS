//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
var ancho,largo,metrosDeAlambre;
function Mostrar()
{
	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	metrosDeAlambre=parseInt((ancho*2+largo*2)*6);
	alert("Necesita "+metrosDeAlambre+" metros de alambre para su terreno")

}

