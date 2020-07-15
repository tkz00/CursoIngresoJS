function mostrar()
{
	var destination = txtIdDestino.value;

	switch(destination)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino hace frio.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("En el destino hace calor.");
			break;
	}
}