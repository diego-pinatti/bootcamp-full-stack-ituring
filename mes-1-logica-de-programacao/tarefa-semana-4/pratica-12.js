function calculoFinal(lista) {    
    let saldoPositivo = 0
    let saldoNegativo = 0
    let quantDepositos = 0
    let quantRetiradas = 0

    lista.forEach(function(item) {
        if (item.movimentacao === "deposito") {
            saldoPositivo += item.valor
            quantDepositos += 1
        } else if (item.movimentacao === "retirada") {
            saldoNegativo += item.valor
            quantRetiradas += 1
        }
    })

    let saldoFinal = saldoPositivo - saldoNegativo
    let positivoOuNegativo = saldoFinal >= 0 ? "positivo" : "negativo"

    console.log(`Total de depósitos: ${quantDepositos}`)
    console.log(`Total de retiradas: ${quantRetiradas}`)
    console.log(`O valor total depositado foi de: ${saldoPositivo}`)
    console.log(`O valor total retirado foi de: ${saldoNegativo}`)
    console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${saldoFinal}.`)
}    

let dadosBancarios = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
  },
  {
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
  },
  {
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
  },
  {
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
  },
  {
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
  },
  {
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
  },
  {
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
  }]


  calculoFinal(dadosBancarios)