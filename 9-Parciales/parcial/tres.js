var ancho,largo,metros;
function Mostrar()
{
    largo=document.getElementById("alrgo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("ancho").value;
    ancho=parseInt(ancho);
    metros=parseInt((ancho*2+largo*2)*3);
    alert("Necesitara "+metros+" metros de alambre para colocar");
}
