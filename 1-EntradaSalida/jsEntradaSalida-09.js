/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salary;

	salary = parseInt(txtIdSueldo.value);
	
	var result = salary * 1.1;

	txtIdResultado.value = result;
}
