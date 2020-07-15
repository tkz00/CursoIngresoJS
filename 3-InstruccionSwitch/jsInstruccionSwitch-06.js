function mostrar()
{
	var sTimeOfDay = txtIdHora.value;
	var timeOfDay = parseInt(sTimeOfDay);

	switch(true)
	{
		case timeOfDay >= 7 && timeOfDay <= 11:
			alert("Es de mañana.");
			break;
		case timeOfDay >= 12 && timeOfDay <= 19:
			alert("Es de tarde.");
			break;
		case timeOfDay >= 20 && timeOfDay <= 24:
		case timeOfDay >= 0 && timeOfDay <= 6:
			alert("Es de noche.");
			break;
		default:
			alert("La hora no existe.");
			break;
	}
}