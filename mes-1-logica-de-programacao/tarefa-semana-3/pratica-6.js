function pesquisaSerie(listaDeSeries, termoDeBusca) {
    let seriesEncontradas = []

        for(let i = 0; i<listaDeSeries.length; i++) {
            if (listaDeSeries[i].includes(termoDeBusca)) {
                seriesEncontradas.push(listaDeSeries[i])
            }
        }
    return seriesEncontradas
}

const listaDeSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
const termoDeBusca = "Th"
let seriesEncontradas = pesquisaSerie(listaDeSeries, termoDeBusca)

console.log(seriesEncontradas)