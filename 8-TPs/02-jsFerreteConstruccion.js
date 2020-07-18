function Rectangulo () 
{
    if(txtIdLargo.value != "" && txtIdAncho.value != "")
    {
        var plotLenght = parseInt(txtIdLargo.value);
        var plotWidth = parseInt(txtIdAncho.value);
        var result;
        
        result = (plotLenght * 2 + plotWidth * 2) * 3;
        
        alert("El largo del alambre debe ser de " + result + " unidades.");
    }
    else{
        alert("Por favor ingrese el ancho y el largo del terreno.")
    }
}

function Circulo () 
{
    if(txtIdRadio.value != "")
    {
        var plotRadius = parseInt(txtIdRadio.value);
        var result;

        result = (Math.PI * plotRadius * 2).toFixed(2);

        alert("El largo del alambre debe ser de " + result + " unidades.");
    }
    else{
        alert("Por favvor ingrese el radio del terreno.")
    }
}

function Materiales () 
{
    if(txtIdLargo.value != "" && txtIdAncho.value != "")
    {
        var plotLenght = parseFloat(txtIdLargo.value);
        var plotWidth = parseFloat(txtIdAncho.value);
        var totalConcrete;
        var totalLime;
        var concretePerSqMeter = 2;
        var limePerSqMeter = 3;
        
        totalConcrete = (plotLenght * plotWidth) / 1 * concretePerSqMeter;
        totalLime = (plotLenght * plotWidth) / 1 * limePerSqMeter;
        
        alert("Para realizar el contrapiso se necesitan " + totalConcrete + " bolsas de cemento y " + totalLime + " bolsas de cal.");
    }
    else{
        alert("Por favor ingrese el ancho y el largo del terreno.")
    }
}