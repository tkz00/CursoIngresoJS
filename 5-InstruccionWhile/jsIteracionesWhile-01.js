function mostrar()
{
	var i = 1;
	var text = "";

	while(i <= 10)
	{
		text += " " + i.toString();
		i = i + 1;
	}

	alert(text);
}