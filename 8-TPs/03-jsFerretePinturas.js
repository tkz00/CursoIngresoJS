/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit = txtIdTemperatura.value;
    
    var result = (fahrenheit - 32) / 1.8;

    alert(fahrenheit + "° fahrenheit son " + result.toFixed(1) + "° centígrados.")
}

function CentigradosFahrenheit () 
{
	var celsius = txtIdTemperatura.value;
    
    var result = celsius * 1.8 + 32;

    alert(celsius + "° centígrados son " + result.toFixed(1) + "° fahrenheit.")
}
