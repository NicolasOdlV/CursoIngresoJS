var precio1,precio2,precio3,total,promedio;
function Mostrar()
{
precio1=document.getElementById("precioUno").value;
precio2=document.getElementById("precioDos").value;
precio3=document.getElementById("precioTres").value;
precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);
total=parseInt((precio1+precio2+precio3));
promedio=parseInt((total/3));
alert("El precio total es: "+total+" y el promedio de los precios es: "+promedio);
}
