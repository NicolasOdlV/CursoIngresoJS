function Mostrar()
{
	var numero;
	var max=numero;
	var min=numero;
	var respuesta;
	var primerNumero=0;
	// declarar variables
	
	while(true){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
	
	while(numero==null||isNaN(numero)){
		respuesta=prompt("Pulse s para agregar numeros, Pulse n para finalizar la operacion");
		if(respuesta='s'){
			continue;
		}else if(respuesta='n'){
			break;
		
	}
	// necesito comparar los numeros
	primerNumero+=numero;
	if(primerNumero>numero){
		document.getElementById("maximo").value=primerNumero;
	}else{
		document.getElementById("minimo").value=numero;
	}
	
	}
	




}//FIN DE LA FUNCIÓN
}