window.onload=function()
{
    var agora=new Date()
    var hora=13//agora.getHours()
    var imagem=document.querySelector("img#img")
    var texto=document.querySelector("div#texto")
    if(hora>=0 && hora<12)
    {
        texto.innerHTML="Bom dia !"
        imagem.src="img/manha.png"
        document.body.style.background="#d1be46"
    }
    else if(hora<18)
    {
        texto.innerHTML="Boa tarde !"
        imagem.src="img/tarde.png"
        document.body.style.background="#9d4a11"
    }
    else
    {
        texto.innerHTML="Boa noite ! "
        texto.innerHTML+=`<br/>Agora são ${hora}`
        imagem.src="img/noite.png"
        document.body.style.background="#2e3336"
    }
}