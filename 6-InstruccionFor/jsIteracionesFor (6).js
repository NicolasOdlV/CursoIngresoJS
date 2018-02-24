function Mostrar()
{
    var numero;
    var cantidadPares=0;    
        numero=prompt("Ingrese un numero");
        numero=parseInt(numero);
  /*   for (var i=1; i<numero;i++) {
            if(i%2==0){
                console.log(i);
                cantidadPares++;               
            }           
        }
    console.log("El total de pares son: "+cantidadPares);
  */
  
        for(var i=numero;i>0;i--){
            if(i%2==0){
                console.log(i);
                cantidadPares++;
            }
        }
        console.log("El total de pares son: "+cantidadPares);
}//FIN DE LA FUNCIÓN