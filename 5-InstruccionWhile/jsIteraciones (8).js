function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

/*	while (respuesta=='si') {
		numero=parseInt(prompt("Ingrese el numero"));
		while(isNaN(numero)){
			numero=prompt("Ingrese el numero");
			numero=parseInt(numero);
		}
		contador++;

		if (numero>0){
			positivo+=numero;
		}else{
			if(numero!=0){
				negativo*=numero;
			}else{
				contador--;
			}
		}
	}
*/
	while(true){
		numero=parseInt(prompt("Ingrese numero"));
		if(numero==null||isNaN(numero)){
			//parar la ejecucion de abajo
			numero=parseInt(prompt("Ingrese numero"));
		}
		
		else if(numero<0){
			negativo*=numero;
		}else{
			positivo+=numero;
		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
}