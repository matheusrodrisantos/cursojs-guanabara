// first object 

const car = {
    type:'Sedan',
    model:'500',
    color:'black'
}


function testeEscopo(){
    return car.model
}

var modelo = testeEscopo();
console.log(modelo);