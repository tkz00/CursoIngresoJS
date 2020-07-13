/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var firstNumber;
	var secondNumber;

	firstNumber = parseInt(txtIdNumeroUno.value);
	secondNumber = parseInt(txtIdNumeroDos.value);

	var result = firstNumber + secondNumber;

	alert("La suma es " + result);
}

