    var edad,sexo,contadorM,promedio=0,total;

function Mostrar()
{
    for(var i=0;i<100;i++){
        do {
            edad=prompt("Ingrese la edad");
            edad=parseInt(edad);
            promedio+=edad;
        } while (isNaN(edad)||(edad<0||edad>100));
        do {
            sexo=prompt("Ingrese su sexo m (masculino), f (femenino))").toLowerCase();
                
        } while (sexo!="f"&&sexo!="m");
        if(edad>=20&&sexo=="m"){
            contadorM++;
        }
    }
        total=promedio/100;
        alert("El promedio es "+total+" Cantidad de varones mayores o iguales a 20: "+contadorM);
}
