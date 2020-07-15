function mostrar()
{
	var age;
	var civilStatus;
	age = txtIdEdad.value;
	civilStatus = estadoCivil.value;

	if(age < 18 && civilStatus != "Soltero")
	{
		alert("Es muy joven para no ser soltero");
	}
}