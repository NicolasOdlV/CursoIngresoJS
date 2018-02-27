//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.

	var numero,contadorPar,promedio,suma;

function Mostrar()
{
	do {
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
	} while (isNaN(numero)||numero<0);
	if(numero==null){
	    console.log(numero);
	}
}

