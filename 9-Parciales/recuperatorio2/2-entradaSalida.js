//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe,precioFinal;
	importe=prompt("Ingrese el importe del producto","Importe");
	importe=parseInt(importe);
	precioFinal=parseInt(importe*1.21);
	document.getElementById("importe").value=precioFinal;
	
}

