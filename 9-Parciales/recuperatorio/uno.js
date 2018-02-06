var base,superficie;
function Mostrar()
{
    base=document.getElementById("laBase").value;
    base=parseInt(base);
    superficie=parseInt(base*base);
    alert("La superficie es: "+superficie);
}
