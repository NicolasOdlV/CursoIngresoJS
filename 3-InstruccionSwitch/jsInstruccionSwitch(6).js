function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
    laHora=parseInt(laHora);
    if(laHora>=7&&laHora<12){ //mañana
        laHora=1;
    }else if(laHora>=12&&laHora<20){ //tarde
        laHora=2;
    }else if((laHora>=0&&laHora<7)||(laHora>=20&&laHora<25)){
        laHora=3;
    }else{
        lahora=4;
    }
switch (laHora) {
    case 1:
        alert("Es de mañana");
        break;
    case 2:
        alert("Es de tarde");
        break;
    case 3:
        alert("Es de noche");    
        break;   
    default:
        alert("La hora ingresada no existe");
        break;
}


}//FIN DE LA FUNCIÓN