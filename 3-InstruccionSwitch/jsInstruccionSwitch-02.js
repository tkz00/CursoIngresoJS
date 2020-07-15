function mostrar()
{
	var monthOfYear =txtIdMes.value;

	switch(monthOfYear)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
	}

	//TAMBIÉN FUNCIONA
	// switch(monthOfYear)
	// {
	// 	case "Enero":
	// 	case "Febrero":
	// 	case "Marzo":
	// 	case "Abril":
	// 	case "Mayo":
	// 	case "Junio":
	// 		alert("Falta para el invierno.");
	// 		break;
	// 	case "Julio":
	// 	case "Agosto":
	// 		alert("Abrigate que hace frío.");
	// 		break;
	// 	default:
	// 		alert("Ya pasamos el frio, ahora calor!!!.");
	// 		break;
	// }
}