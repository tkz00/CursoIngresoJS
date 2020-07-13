function mostrar()
{
	var age;
	age = txtIdEdad.value;
	
	if(age >= 0)
	{
		if(age >= 18)
		{
			alert("La persona es mayor de edad");
		}
		else
		{
			alert("La persona es menor de edad");
		}
	}
}