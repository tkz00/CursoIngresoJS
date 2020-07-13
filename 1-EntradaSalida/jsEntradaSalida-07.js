/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var firstNumber;
	var secondNumber;
	var result;

	firstNumber = parseInt(txtIdNumeroUno.value);
	secondNumber = parseInt(txtIdNumeroDos.value);

	result = firstNumber + secondNumber;

	alert("La suma es " + result);
}

function restar()
{
	var firstNumber;
	var secondNumber;

	firstNumber = parseInt(txtIdNumeroUno.value);
	secondNumber = parseInt(txtIdNumeroDos.value);
	
	result = firstNumber - secondNumber;

	alert("La resta es " + result);
}

function multiplicar()
{ 
	var firstNumber;
	var secondNumber;

	firstNumber = parseInt(txtIdNumeroUno.value);
	secondNumber = parseInt(txtIdNumeroDos.value);
	
	result = firstNumber * secondNumber;

	alert("El producto es " + result);
}

function dividir()
{
	var firstNumber;
	var secondNumber;

	firstNumber = parseInt(txtIdNumeroUno.value);
	secondNumber = parseInt(txtIdNumeroDos.value);
	
	result = firstNumber / secondNumber;

	alert("La división es " + result);
}

