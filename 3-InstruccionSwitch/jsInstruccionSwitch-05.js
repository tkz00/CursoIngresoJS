function mostrar()
{
	var sTimeOfDay = txtIdHora.value;
	var timeOfDay = parseInt(sTimeOfDay);

	switch(true)
	{
		case timeOfDay >= 7 && timeOfDay <= 11:
			alert("Es de mañana.");
			break;
	}
}