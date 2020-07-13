/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var firstNumber;
	var secondNumber;

	firstNumber = parseInt(txtIdNumeroDividendo.value);
	secondNumber = parseInt(txtIdNumeroDivisor.value);
	
	result = firstNumber % secondNumber;

	alert("El resto de la división es " + result);
}
