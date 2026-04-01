let valor = Number(prompt("Por favor, digite o valor da sua compra"));
let desconto;
let resultado;

if (valor >= 100) {
    alert("Parabéns! Você ganhou um desconto de 10%");

    desconto = ((valor * 10)/100);
    alert(`Seu desconto foi de R$ ${desconto.toFixed(2)}`);

    resultado = (valor - desconto);
    alert(`O valor final de sua compra é R$ ${resultado.toFixed(2)}`);
} else {
    alert(`Compras abaixo de R$ 100,00 não têm desconto. O valor final é: R$ ${valor.toFixed(2)}`);
}