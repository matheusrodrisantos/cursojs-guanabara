let num =[1,2,3,4,5,6,7]
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos=num.indexOf(10)
if(pos!==-1){
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}else{
    console.log('O valor pesquisado não foi encontrado')
}