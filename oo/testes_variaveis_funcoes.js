//variaveis 
//1 var 
//2 let 
//3 const 
//var------------------------------------------
function variavelVar()
{
    console.log("var-------------------")
    var numero; 
    var variavel1;
    console.log(variavel1);// exibirá undefined 
    variavel1=10
    console.log(variavel1);
    
    variavel1 =()=>
    {
        numero = 10+2
        return numero
    }
    console.log(variavel1());
}

//---------------------------------------------
function variavelLet()
{
    //let-------------------------------------------
    console.log("let-------------------")
    let variavel2;
    console.log(variavel2);// exibirá undefined 
    variavel2="texto que está dentro da variavel 2";
    console.log(variavel2)

    variavel2 =()=>{
        return "texto alterado"
    }
    console.log(variavel2())
}
const a = ()=>
{
    //----------------------------------------------
    //const-----------------------------------------

    let b="asdad"
    console.log("const----------------")
    //const variavel3;//SyntaxError: Missing initializer in const declaration - não deixa declarar sem inicialização
    const variavel4 = 10;
    console.log(variavel4);

    const variavel5 =()=>
    {   
        return "Valor da variavel5  "

    }
    console.log(variavel5());
    
}


//variavelVar();
//variavelLet();
 
console.log(a());