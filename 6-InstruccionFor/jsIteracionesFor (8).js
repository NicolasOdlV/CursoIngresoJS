function Mostrar()
{//revisar
    var numero;
    var primo="Es primo";
        numero=parseInt(prompt("Ingrese numero"));
            for (i = 2; i<numero ; i++) {
                if(numero%i==0){
                    primo="no es primo";
                    break;
                }
                
            }
            alert(primo);
            
          //  console.log("Es primo");


}//FIN DE LA FUNCIÓN