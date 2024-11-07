function adicionar() {
    //recuperar nomee o prroduto e quantidaade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade'); 
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade.value);
    //calcular o preço subtotal
    let preco = quantidade.value * valorUnitario;
    alert(preco);
    
    //adicionar itens ao carrinho
    //atualizar valor total
}

function limpar() {

}