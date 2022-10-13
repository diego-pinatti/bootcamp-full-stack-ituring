function calculaDesconto(valor, desconto){
    const valorFinal = valor*(1 - desconto/100)
    return valorFinal.toFixed(2)
}

const valorComDesconto = calculaDesconto(1000, 95)

console.log(valorComDesconto)

