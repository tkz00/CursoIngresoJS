function mostrar()
{
	var season = txtIdEstacion.value;
	var destination = txtIdDestino.value;

	switch (true)
	{
		case season == "Invierno" && destination == "Bariloche":
			alert("Se viaja.");
			break;
		case season == "Invierno" && destination != "Bariloche":
			alert("No se viaja.");
			break;
		case season == "Verano" && (destination == "Mar del plata" || destination == "Cataratas"):
			alert("Se viaja.");
			break;
		case season == "Verano" && !(destination == "Mar del plata" || destination == "Cataratas"):
			alert("No se viaja.");
			break;
		case season == "Otoño":
			alert("Se viaja.");
			break;
		case season == "Primavera" && destination != "Bariloche":
			alert("Se viaja.");
			break;
		case season == "Primavera" && destination == "Bariloche":
			alert("No se viaja.");
			break;
	}
}