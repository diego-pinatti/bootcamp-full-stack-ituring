function saldoFinal (lista) {
    let quantDepositos = 0
    let quantRetiradas = 0
    let saldoPositivo = 0
    let saldoNegativo = 0
    let balanco = ""

    for(let i = 0; i < lista.length; i++) {

        if(lista[i] > 0) {
            saldoPositivo += lista[i]
        } else if(lista[i] < 0) {
            saldoNegativo += lista[i]
        }
   
        if(lista[i] > 0) {
            quantDepositos++
        } else {
            quantRetiradas++
        }

        if(saldoPositivo + saldoNegativo > 0) {
            balanco = "positivo"
        } else {
            balanco = "negativo"
        }
}    

    console.log(`Total de depósitos: ${quantDepositos}\nTotal de retiradas: ${quantRetiradas}`)
    console.log(`O valor total depositado foi de: R$ ${saldoPositivo}\nO valor total retirado foi de: R$ ${saldoNegativo}\nO saldo final de sua conta foi ${balanco} no valor de R$ ${saldoPositivo + saldoNegativo}`)
    
}

const lista = [100, -20, -30, 10, -7, -21, -5]

saldoFinal(lista)