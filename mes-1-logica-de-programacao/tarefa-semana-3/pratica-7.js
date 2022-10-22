function saldoFinal (lista) {
    let saldo = 0

    for(let i = 0; i < lista.length; i++) {
        saldo += lista[i]
    }

    if(saldo >= 0 ) {
        console.log(`O saldo final de sua conta foi positivo no valor de R$ ${saldo}.`)
    }else {
        console.log(`O saldo final de sua conta foi negativo no valor de R$ ${saldo}.`)
    }
}

const lista = [100, -20, -30, 10, -7, -21, -5]

saldoFinal(lista)
