let precoTotal = 0;
let carrosAte2000 = 0;

document.addEventListener('DOMContentLoaded', function() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log(carrinho.carrosAte2000)
    if (carrinho.length > 0) {
        carrinho.forEach(item => {
            let desconto
            if (item.ano <= 2000) {
                desconto = item.preco * 12 / 100;
                precoTotal += (item.preco - desconto);
                carrosAte2000++;
            } else {
                desconto = item.preco * 7 / 100;
                precoTotal += (item.preco - desconto);
            }
            let valorFinalItem = item.preco - desconto
            const mensagem = `<p>Você comprou um ${item.nome} do ano ${item.ano}. Ele custa R$${item.preco.toLocaleString('pt-BR')} reais. Porém com nosso desconto ele custará R$${valorFinalItem.toLocaleString('pt-BR')}</p>`;
            pagamentoDinamico.innerHTML += mensagem;
        });
    } else {
        pagamentoDinamico.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
});

function realizarPagamento() {
    alert(`Obrigado por sua compra, você comprou ${carrosAte2000} carros anteriores aos anos 2001 e o total da sua compra é de R$${precoTotal.toLocaleString('pt-BR')}`);
    limparCarrinho()

}
function limparCarrinho(){
    pagamentoDinamico.innerHTML = "<p>Seu carrinho está vazio.</p>";
    precoTotal = 0;
    carrosAte2000 = 0;

    localStorage.removeItem('carrinho');
} 