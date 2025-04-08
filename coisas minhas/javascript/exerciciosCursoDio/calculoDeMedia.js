const notas = {nota1: 6,nota2: 3,nota3:5}
let mensagemSaida

const somaDasNotas = notas.nota1 + notas.nota2 + notas.nota3
const media = somaDasNotas/3

if(media > 7){
    mensagemSaida = "passou de ano"
}
else if(media <= 7 && media >= 5){
    mensagemSaida = "está em recuperação"
}
else{
    mensagemSaida = "reprovou"
}
console.log(`o aluno ${mensagemSaida} com média ${media.toFixed(1)}`)
