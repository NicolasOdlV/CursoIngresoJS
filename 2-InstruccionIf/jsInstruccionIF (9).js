function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.random()*11;
	document.getElementById("FormIngreso").value=numero;
	alert(document.getElementById("FormIngreso").value);

}//FIN DE LA FUNCIÓN