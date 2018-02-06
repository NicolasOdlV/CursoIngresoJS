/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1, numero2,resultado;
    numero1 = document.getElementById("numeroUno").value; // tomo los valores de la pantalla
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);                // parseInt toma unicamente numeros, no texto
    numero2 = parseInt(numero2);                
    resultado=numero1+numero2;
    alert("El resultado de la suma es: "+ resultado);

}

