/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var numero1,numero2,resultado1,resultado2,resultado3,resultado4;

function sumar()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado1 = numero1 + numero2;
    alert("El resultado es " + resultado1);
}

function restar()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado2 = numero1 - numero2;
    alert("El resultado es " + resultado2);
}

function multiplicar()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado3 = numero1 * numero2;
    alert("El resultado es " + resultado3);
}

function dividir()
{
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    if (numero2 == 0) {
        alert("ERROR, no se puede dividir por 0");
    } else {
        resultado4 = numero1 / numero2;
        alert("El resultado es " + resultado4);
    }
}

