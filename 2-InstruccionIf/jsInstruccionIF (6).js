function Mostrar()
{
//tomo la edad  
var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    if(edad>17){
        alert("Es mayor de edad");
    }else if(edad>=13&&edad<=17){
        alert("Es adolescente");
    }else{
        alert("Es un niño/a");
    }



}//FIN DE LA FUNCIÓN