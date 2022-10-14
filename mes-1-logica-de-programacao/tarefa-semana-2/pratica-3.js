function obterAleatorio() {
    return Math.floor(Math.random() * 10000 + 1)
}
let numero = obterAleatorio()

console.log(numero)