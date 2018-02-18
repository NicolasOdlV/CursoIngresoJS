function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Julio":                       //porque ambas comparten un mismo codigo
    case "Agosto":
                alert("Abrigate que hace frio");
        break;      
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
               alert("Ya pasamos el frio, hace calor");  
        break;
    default:
               alert("Falta poco para el invierno");
        break;
}



//jafhu

}//FIN DE LA FUNCIÓN