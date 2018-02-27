    var mes;

function Mostrar()
{
    mes= prompt("Ingrese el nombre del mes").toLowerCase();
    switch (mes) {
        case "enero": 
                    alert("Comienza el año");    
            break;
        case "diciembre":    
                    alert("Se vienen las fiestas");
            break;
        default:
                    alert("no es enero ,ni diciembre");
            break;
    }
}
