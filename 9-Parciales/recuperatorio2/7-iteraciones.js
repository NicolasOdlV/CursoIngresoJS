//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
	var notas,acumuladorDeNotas=0,sexo,contadorM=0,promedio,min,contador=0;

function Mostrar()
{
	for(var i=0;i<3;i++){
	do {
		notas=prompt("Ingrese nota del alumno "+(i+1));
		notas=parseInt(notas);
		contador++;
	} while (isNaN(notas)||(notas<0||notas>10));
	do{
		sexo=prompt("Ingrese sexo del alumno","f o m");
		if(sexo=="m"&&notas>=6){
			contadorM++;
		}
	}while(sexo!="f"&&sexo!="m");
	
		acumuladorDeNotas=acumuladorDeNotas+notas;
		

	}		
		if(contador==1){
			min=notas;
		}else{
			if(nota<min){
				min=notas;
			}
		}
	    promedio=acumuladorDeNotas/contador;
	alert("Promedio de las notas totales: "+promedio+ " Cantidad de varones con nota mayor o igual a 6: "+contadorM);
	//alert("El minimo es: "+min);
}

