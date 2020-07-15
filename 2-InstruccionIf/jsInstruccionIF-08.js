function mostrar()
{
	var age;
	var civilStatus;
	age = txtIdEdad.value;
	civilStatus = estadoCivil.value;

	if(age >= 18 && civilStatus == "Soltero")
	{
		alert("Es soltero y no es menor");
	}
}