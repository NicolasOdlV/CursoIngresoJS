function Mostrar()
{
    var numero;
    var cantidadDivisores=0;

        numero=parseInt(prompt("Ingrese un numero"));

        for(var i=numero;i>0;i--){                     // en forma decreciente
            if(numero%i==0){
                console.log(i);
                cantidadDivisores++;
            }
        }
  console.log("La cantidad de divisores son: "+cantidadDivisores);


}//FIN DE LA FUNCIÓN