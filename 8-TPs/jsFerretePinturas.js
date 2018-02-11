/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var temperatura;
var celcius;
var fahrenheit;
function FahrenheitCentigrados () 
{
    temperatura=parseInt(document.getElementById("Temperatura").value);
    celcius=parseInt(((1/9)*(5*temperatura-160)));
    alert(temperatura+" Fahrenheit son "+celcius+" centigrados");
}

function CentigradosFahrenheit () 
{
    temperatura=parseInt(document.getElementById("Temperatura").value);
    fahrenheit=parseInt((9/5)*temperatura+32);
    alert(temperatura+" centigrados son "+fahrenheit+" Fahrenheit");
}
