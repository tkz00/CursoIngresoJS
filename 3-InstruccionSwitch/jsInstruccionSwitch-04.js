function mostrar()
{
	var monthOfYear =txtIdMes.value;

	switch(monthOfYear)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.");
			break;
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Nobiembre":
			alert("Este mes tiene 30 días.");
			break;
	}
}