//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
	var primerNumero,segundoNumero,resultado;

function Mostrar()
{
	primerNumero=prompt("Ingrese un numero");
	primerNumero=parseInt(primerNumero);
	segundoNumero=prompt("Ingrese el segundo numero");
	segundoNumero=parseInt(segundoNumero);

		if(primerNumero==segundoNumero){
			resultado=primerNumero*segundoNumero;
			document.write(resultado);
		}else if(primerNumero>segundoNumero){
			resultado=primerNumero-segundoNumero;
			document.write(resultado);
		}else{
			resultado=primerNumero+segundoNumero;
			document.write(resultado);
		}	
}

