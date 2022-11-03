function mediaAvaliacoes(lista) {
    let somaValores = 0

    lista[0].avaliacoes.forEach(function(item) {
        somaValores += item.nota
    })

    let media = somaValores.toFixed(2) / avalia[0].avaliacoes.length
    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${media}.`)  
}

let avaliaTomaFood = [{
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
      {
        cliente: "Thais S.",
        nota: 9.8
      },
      {
        cliente: "Thales Gonçalves",
        nota: 8.9
      },
      {
        cliente: "José Lopes",
        nota: 9.9
      },
      {
        cliente: "Cristina Souza",
        nota: 9.3
      },
      {
        cliente: "Leo Garcia",
        nota: 8.5
      }
    ]
  }]

  mediaAvaliacoes(avaliaTomaFood)