let calculaDesconto = function(valor, desconto){
    let valorFinal = valor*(1 - desconto/100)
    return valorFinal.toFixed(2)
}

console.log(calculaDesconto(100, 10))
