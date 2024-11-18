function calcular(product, action) {
    const valor = document.querySelector('#valor_' + product)
    const qtd = document.querySelector('#qtd_' + product)
    const total = document.querySelector('#total_' + product)

    if(action == '-' && qtd.innerHTML == 0) {

    } else {
        action == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML;
       valorTotal();
}
    function valorTotal() {
        let sum = 0;
        sum += Number(document.querySelector('#total_1').innerHTML)
        sum += Number(document.querySelector('#total_2').innerHTML)
        sum += Number(document.querySelector('#total_3').innerHTML)

        document.querySelector('#subTotal').innerHTML = sum
}


}