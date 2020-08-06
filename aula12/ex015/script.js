var btn=document.getElementById("verificar");
btn.addEventListener('click',verificar);
function verificar()
{
    var ano=document.getElementById("ano")
    var agora=new Date();
    ano=Number(ano.value)
    var idade=agora.getFullYear()-ano
    var sexo=document.getElementsByName("sexo")
    var img=document.getElementById("img")
    if(sexo[0].checked)
    {
        if(idade<10)
        {
            img.innerHTML=`<p>Detectamos criança masculina de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-bebe-m.png'>"
        }
        else if(idade<30)
        {
            img.innerHTML=`<p>Detectamos jovem masculino de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-jovem-m.png'>"
        }
        else if(idade<60)
        {
            img.innerHTML=`<p>Detectamos adulto masculino de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-adulto-m.png'>"
        }
        else
        {
            img.innerHTML=`<p>Detectamos idoso masculino de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-idoso-m.png'>"
        }
    }
    else
    {
        if(idade<10)
        {
            img.innerHTML=`<p>Detectamos criança feminina de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-bebe-f.png'>"
        }
        else if(idade<30)
        {
            img.innerHTML=`<p>Detectamos jovem feminina de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-jovem-f.png'>"
        }
        else if(idade<60)
        {
            img.innerHTML=`<p>Detectamos adulta feminina de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-adulto-f.png'>"
        }
        else
        {
            img.innerHTML=`<p>Detectamos idosa feminina de ${idade} anos</p>`
            img.innerHTML+="<img src='img/foto-idoso-f.png'>"
        }
    }
}