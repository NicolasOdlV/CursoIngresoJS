var numero1,numero2,suma;
function Mostrar()
{   
    numero1=prompt("Ingrese el 1º numero");
    numero1=parseInt(numero1);
    numero2=prompt("Ingrese el 2º numero");
    numero2=parseInt(numero2);

    suma=numero1+numero2;
    if(suma>0){
        document.write("Es positivo");
    }else if(suma==0){
        document.write("cero");
    }else{
        document.write("Es negativo");
    }
}
