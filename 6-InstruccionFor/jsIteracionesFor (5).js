function Mostrar()
{
    var repeticiones;
    for(;repeticiones!=9;){
         repeticiones=parseInt(prompt("ingrese numero de repeticiones"));
            while(isNaN(repeticiones)){
                repeticiones=parseInt(prompt("ingrese numero"));
                if(repeticiones==9){
                    break;
                }
        }

    }



}//FIN DE LA FUNCIÓN