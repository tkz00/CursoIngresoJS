function mostrar()
{
	var season = txtIdEstacion.value;
	var destination = txtIdDestino.value;
	var basePrice = 15000;
	var finalPrice;

	switch(true)
	{
		case season == "Invierno" && destination == "Bariloche":
			finalPrice = basePrice * 1.2;
			break;
		case season == "Invierno" && (destination == "Cordoba" || destination == "Cataratas"):
			finalPrice = basePrice * 0.9;
			break;
		case season == "Invierno" && destination == "Mar del plata":
			finalPrice = basePrice * 0.8;
			break;
		case season == "Verano" && destination == "Bariloche":
			finalPrice = basePrice * 0.8;
			break;
		case season == "Verano" && (destination == "Cordoba" || destination == "Cataratas"):
			finalPrice = basePrice * 1.1;
			break;
		case season == "Verano" && destination == "Mar del plata":
			finalPrice = basePrice * 1.2;
			break;
		case (season == "Otoño" || season == "Primavera") && (destination == "Bariloche" || destination == "Cataratas" || destination == "Mar del plata"):
			finalPrice = basePrice * 1.1;
			break;
		case (season == "Otoño" || season == "Primavera") && destination == "Cordoba":
			finalPrice = basePrice * 1.0;
			break;
	}

	alert("El precio de su viaje es de: $" + finalPrice);
}