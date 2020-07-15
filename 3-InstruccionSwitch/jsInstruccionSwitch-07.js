function mostrar()
{
	var destination = txtIdDestino.value;

	switch(destination)
	{
		case "Bariloche":
			alert("El destino se encuentra en el Oeste");
			break;
		case "Cataratas":
			alert("El destino se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("El destino se encuentra en el Este");
			break;
		case "Ushuaia":
			alert("El destino se encuentra en el Sur");
			break;
	}
}