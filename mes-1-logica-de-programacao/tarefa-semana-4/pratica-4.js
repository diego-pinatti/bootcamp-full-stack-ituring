function descobrirRaizQuadrada(lista) {
    
    let novaLista = lista.map(function(item) {
        return Math.sqrt(item)
    })
    return novaLista
}

let numeros = [4, 9, 16, 25, 36, 49]

console.log(descobrirRaizQuadrada(numeros))