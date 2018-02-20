function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;

	while (true) {
		numero=prompt("Ingresa un numero");
		numero=parseInt(numero);

		if(numero==null|| isNaN(numero)){
			respuesta=prompt("Pulse s para agregar numeros, Pulse n para finalizar la operacion");
			if(respuesta=="n"){
			break;
			}else if(respuesta=="s"){
				continue;
			}
		}else{
			acumulador+=numero;
			contador++;
		}
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN