function mostrar()
{
	var note = Math.floor(Math.random() * 10 +1);

	if(note < 4)
	{
		alert("Nota: " + note + " Vamos, la proxima se puede");
	}

	if(note >= 4 && note <= 8)
	{
		alert("Nota: " + note + " APROBÓ");
	}

	if(note >= 9)
	{
		alert("Nota: " + note + " EXCELENTE");
	}
}