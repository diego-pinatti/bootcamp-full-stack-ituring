function calculoImc (peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}

function classificacaoImc (imc) {
    if (imc < 18.5) {
        return "Abaixo do Peso"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso Normal"
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso"
    } else {
        return "Obesidade"
}
}

calculoImc (100, 1.8)
console.log(classificacaoImc())

