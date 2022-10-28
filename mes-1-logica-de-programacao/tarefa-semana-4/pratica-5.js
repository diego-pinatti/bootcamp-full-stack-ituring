const listaCrescente = (lista) => {

    let listaOrdenada = lista.sort(function(a, b) {
        return a - b
    })
    return listaOrdenada
}

let numeros = [4, 9, 7, 1, 8, 12]

console.table(listaCrescente(numeros))