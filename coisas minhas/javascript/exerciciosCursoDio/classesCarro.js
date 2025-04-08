class Carro {
    marca;
    anoCarro;
    cor;
    quilometrosRodados;
    quilometroPorLitro;
    precoCombustivel = 10;
    ValorPercurso;

    constructor(marca, anoCarro, cor, quilometrosRodados, combustivelPorLitro){
        this.marca = marca
        this.anoCarro = anoCarro
        this.cor = cor
        this.quilometrosRodados = quilometrosRodados
        this.ValorPercurso = (quilometrosRodados/combustivelPorLitro*this.precoCombustivel)

    }
    TextoDeSaida() {
        console.log(`O seu carro é um ${this.marca} do ano ${this.anoCarro} de cor ${this.cor} e o valor de seu percurso é de ${this.ValorPercurso.toFixed(2)} reais`)
    }
}
const kwid = new Carro('Kwid', 2020, 'Vermelho',150, 15)
const fiat = new Carro('Fiat', 2010, 'Prata', 200, 12)
kwid.TextoDeSaida()
fiat.TextoDeSaida()