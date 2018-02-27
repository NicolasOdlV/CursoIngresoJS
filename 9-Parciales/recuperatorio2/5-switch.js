//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
	var mes;

function Mostrar()
{
	mes=prompt("Escriba un mes del año").toLowerCase();
	
		switch (mes) {
			case "enero":
			case "febrero":
						 	alert("Veranito!!!");	
				break;
			default: alert("Extraño enero y febrero")
				break;
		}
	
}

