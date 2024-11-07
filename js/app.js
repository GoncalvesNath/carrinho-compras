let valorTotal = 0;
limpar();
function adicionar() {
    //recuperar nomee o prroduto e quantidaade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar itens ao carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    //atualizar valor total
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';


}