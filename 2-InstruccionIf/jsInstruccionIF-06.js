function mostrar()
{
	var age;
	age = txtIdEdad.value;
	
	if(age < 13)
	{
		alert("La persona es un niño");
	}

	if(age >= 13 && age <= 17)
	{
		alert("La persona es un adolescente");
	}

	if(age > 17)
	{
		alert("La persona es un adulto");
	}
}