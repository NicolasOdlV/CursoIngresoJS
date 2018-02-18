//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño=prompt("Ingrese un mes del año","noviembre");
	switch (mesDelAño) {
		case "enero":
		case "febrero":	
				alert("Veranitooooo!!!");
			break;
		default:
				alert("Extraño enero y febrero");
			break;
	}
}

