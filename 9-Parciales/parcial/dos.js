function Mostrar()
{
    var importe,importeFinal;
    importe=prompt("Ingrese el importe del producto","Importe");
    importe=parseInt(importe);
    importeFinal=parseInt((importe*1.21));
   document.getElementById("importeFinal").value=importeFinal;
}
