var importeFinal,iva,precio;

function Mostrar()
{
    precio=prompt("ingrese el precio del producto, por favor ");
    precio=parseInt(precio);
    importeFinal=parseInt(precio*1.21);
    document.getElementById("importeFinal")=importeFinal;
}
