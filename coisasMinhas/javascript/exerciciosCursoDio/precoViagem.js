const precoGasolina = 6.12
const precoEtanol = 4.06
let quilometroPorLitro = 10
let distanciaEmQuilometros = 100

let isCombustivelGasolina 
let tipoCombustivel

if(isCombustivelGasolina === true){
    tipoCombustivel = {preco: precoGasolina, nome:"Gasolina"}
}
else{
    tipoCombustivel = {preco: precoEtanol, nome: "Etanol"}
}
let valorViagem = distanciaEmQuilometros/quilometroPorLitro*tipoCombustivel.preco

console.log(`a sua viagem de ${distanciaEmQuilometros.toFixed(2)} quilômetros, custará: ${valorViagem.toFixed(2)} reais utilizando ${tipoCombustivel.nome} como combustível`)