var importe,importeFinal;
function Mostrar()
{
  importe=prompt("Ingrese el importe del producto","Importe");
  importe=parseInt(importe);
  importeFinal=parseInt((importe*0.75));
  document.getElementById("importeFinal").value=importeFinal;
}
