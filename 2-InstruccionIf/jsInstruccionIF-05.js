function mostrar()
{
	var age;
	age = txtIdEdad.value;
	
	if(!(age >= 13 && age <= 17))
	{
		alert("La persona no es un adolescente");
	}

	//AMBOS METHODOS FUNCIONAN

	// if(age < 13 || age > 17)
	// {
	// 	alert("La persona no es un adolescente");
	// }
}