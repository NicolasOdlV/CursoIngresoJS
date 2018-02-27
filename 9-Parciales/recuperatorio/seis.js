    var peso,min,max,bandera=true;
function Mostrar()
{
    for(var i=0;i<2;i++){
  do {
        peso=prompt("Ingrese el numero");
        peso=parseInt(peso);
        
              
  } while (isNaN(peso)||peso<0);

        if(bandera){
            bandera=false;
            max=peso;
            min=peso;
        }else{
            if(max>peso){
                alert("El mas pesado fue: "+max+" el menos pesado fue: "+min);
            }else{
            }
        }
        i++;
    }
}
