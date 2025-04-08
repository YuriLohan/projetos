
let pagamentoDinamico = document.getElementById('pagamentoDinamico');


function adicionarAoCarrinho(nome, ano, preco) {
    const mensagem = `<p>Você comprou um ${nome} do ano ${ano}. Ele custa R$${preco.toLocaleString('pt-BR')} reais</p>`;
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, ano, preco});
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    aparecerMensagem(mensagem)
}

function aparecerMensagem(mensagem) {
    pagamentoDinamico.innerHTML += mensagem;
}