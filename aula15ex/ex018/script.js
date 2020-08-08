let numeros=[]
let valor=document.getElementById("txtNumero");
let resultado=document.getElementById("resultado")
let resumo=document.getElementById("resumo")
let valorAdd=0;
function adicionar()
{
    if(valor.value=='')
    {
        alert("Valor invalido");
    }
    else
    {
        valorAdd=Number(valor.value)
        valor.value=''
        if(valorAdd>100 || valorAdd<1 || numeros.indexOf(valorAdd)!=-1)
        {   
            alert("Valor invalido ou já encontrado na lista")
        }
        else
        {
            numeros.push(valorAdd)
            console.log(numeros)
            resultado.innerHTML+=`<br>Valor ${valorAdd} foi adicionado`
            resumo.innerHTML=""
        }
    }    
}
function resumir()
{
    if(numeros.length==null)
    {
        alert('Não pode finalizar pois está vazio')
    }
    else
    {

        numeros.sort(function(a, b){return a - b})
        let somatorio=0,media=0;
        for(var c in numeros)
        {
            somatorio=somatorio+numeros[c];
        }

        media=somatorio/numeros.length

        resumo.innerHTML+=`<p>Ao todo temos ${numeros.length} números cadastrados</p>`                
        resumo.innerHTML+=`<p>O maior valor informado foi ${numeros[numeros.length-1]}.</p>`                
        resumo.innerHTML+=`<p>O menor valor informado foi ${numeros[0]}.</p>`                
        resumo.innerHTML+=`<p>Somando todos os valores temos ${somatorio}.</p>`                
        resumo.innerHTML+=`<p>A média dos valores digitados é ${media}.</p>`                      
    }
}

