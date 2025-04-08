const pesoUsuario = 70
const alturaUsuario = 1.78
let mensagemSaida

const imc = pesoUsuario/Math.pow(alturaUsuario,2)

if(imc <= 18.5){
    mensagemSaida = "Abaixo do peso"
}
else if(imc > 18.5 && imc < 25){
    mensagemSaida = "No peso ideal"
}
else if(imc >= 25 && imc < 30){
    mensagemSaida = "Acima do peso"
}
else if(imc >= 30 && imc <= 40){
    mensagemSaida = "Obeso"
}
else{
    mensagemSaida = "Com obesidade grave"
}

console.log(`O adulto está ${mensagemSaida} e tem o IMC de ${imc.toFixed(0)}`)