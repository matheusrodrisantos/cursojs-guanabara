
var btn=document.querySelector("input#enviar")
var resultado=document.getElementById("resultado")
btn.addEventListener('click',contar)

function exibeBandeira(inicio,fim,passo)
{
    
    if(passo==0){
        resultado.innerHTML="<br>O passo não pode ser vazio ou 0, será considerado o passo como 1</br>"
        passo=1
    }
    for(var c=inicio; c<=fim; c=c+passo)
    {
        resultado.innerHTML+=`👉${c}`
    }
    resultado.innerHTML+="🏁"
}

function contar()
{
    
    var inicio=document.getElementById("n1").value
    var fim=document.getElementById("n2").value
    var passo=document.getElementById("passo").value
    resultado.innerHTML=""

    inicio=Number(inicio)
    fim=Number(fim)
    passo=Number(passo)

    if(inicio===fim || inicio>fim)
    {
        resultado.innerHTML="O inicio não pode ser maior ou igual que o fim"
    }
    else
    {   
        if(inicio==="")
        {
            resultado.innerHTML="O inicio não pode estar vazio"

        }
        else
        {
            if(fim==='' || fim===0)
            {
                resultado.innerHTML="O fim não pode estar vazio"
            }
            else
            {
                exibeBandeira(inicio,fim,passo)
            }
        } 
    }
}
