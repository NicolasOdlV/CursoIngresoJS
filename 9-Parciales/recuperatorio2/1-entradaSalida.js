//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base,perimetro;
	base=document.getElementById("lado").value;
	base=parseInt(base);
	perimetro=parseInt(base*3)
	alert("El perimetro del triangulo equilatero de base "+base+" es "+perimetro);
	
}

