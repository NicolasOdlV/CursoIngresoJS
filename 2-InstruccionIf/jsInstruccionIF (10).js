function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota=Math.floor(Math.random()*11);
	if(nota>=9){
		alert("Su nota es: "+nota+" EXCELENTE");
	}else if(nota>=4 && nota<9){
		alert("Su nota es: "+nota+" APROBó");
	}else{
		alert("Su nota es: "+nota+" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN