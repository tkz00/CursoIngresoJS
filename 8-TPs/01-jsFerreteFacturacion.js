function Sumar () 
{
    var firstPrice = parseInt(txtIdPrecioUno.value);
    var secondPrice = parseInt(txtIdPrecioDos.value);
    var thirdPrice = parseInt(txtIdPrecioTres.value);
    var result;

    result = firstPrice + secondPrice + thirdPrice;

    alert("La suma de todos los precio es de: $" + result);
}

function Promedio () 
{
	var firstPrice = parseInt(txtIdPrecioUno.value);
    var secondPrice = parseInt(txtIdPrecioDos.value);
    var thirdPrice = parseInt(txtIdPrecioTres.value);
    var result;

    result = (firstPrice + secondPrice + thirdPrice) / 3;

    alert("La promedio de todos los precio es de: $" + result);
}

function PrecioFinal () 
{
	var firstPrice = parseInt(txtIdPrecioUno.value);
    var secondPrice = parseInt(txtIdPrecioDos.value);
    var thirdPrice = parseInt(txtIdPrecioTres.value);
    var result;

    result = (firstPrice + secondPrice + thirdPrice) * 1.21;

    alert("La precio final de todos los precio es de: $" + result);
}