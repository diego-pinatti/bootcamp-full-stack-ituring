let listaDeSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
let termoDeBusca = "Th"

let resultadoBusca = listaDeSeries.filter(function(item) {
    return item.includes(termoDeBusca)
})

console.log(resultadoBusca)