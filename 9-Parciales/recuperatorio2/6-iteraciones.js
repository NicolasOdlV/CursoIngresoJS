//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
	var importe;
	var max;
	var min;
	var bandera;
function Mostrar()
{
	for(var i=0;i<2;i++){
	do {
		importe=prompt("Ingrese el importe del dia "+(i+1));
		importe=parseInt(importe);
		if(bandera){
			bandera=false;
			max=num;
			min=num;
		}else{
			// falta
		}
	} while (isNaN(importe)||importe<=0);
	}
		console.log("El mayor importe de la semana fue: "+max+" y el minimo "+min);
}

