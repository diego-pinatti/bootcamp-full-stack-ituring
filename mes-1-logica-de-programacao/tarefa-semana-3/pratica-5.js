function pesquisaSerie(lista, serie) {
    for(let i = 0; i<lista.length; i++) {
        if (lista[i] === serie) {
            return console.log([i])
        }
    }
}

let lista = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

pesquisaSerie(lista, "Dexter")