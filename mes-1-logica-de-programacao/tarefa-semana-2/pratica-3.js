function numeroAleatorio() {
    const min = 1
    const max = 10
    const numero = Math.random()*(max - min) + 1
    const numeroInteiro = parseInt(numero)

    console.log(numero)

    return numeroInteiro
}

console.log(numeroAleatorio())