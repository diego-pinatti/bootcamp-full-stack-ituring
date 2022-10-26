function buscarSerie(series, termodebusca) {
    let indice = undefined
    series.forEach((item, i) => {
        if(item === termodebusca){
            indice = i
        }
    })
    console.log(indice)
}

let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

buscarSerie(listaSeries, "Friends")