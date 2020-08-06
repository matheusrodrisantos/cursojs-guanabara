function calcular()
{
    var numero=document.getElementById("n").value;
    var resultado=document.getElementById("resultado");
    numero=Number(numero)
    resultado.innerHTML=`A tabuada do ${numero} é:<br>`
    for(var c = 1; c<11; c++)
    {
        var total=numero*c
        resultado.innerHTML+=`<br>${numero} X ${c} = ${total}`
    }
}