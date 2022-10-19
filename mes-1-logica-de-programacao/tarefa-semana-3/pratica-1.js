function criarTabuada (n) {
    let i = 1

    console.log(`Tabuada de ${n}`)

    while (i <= 10) {
        console.log(`${n} x ${i} = ${n * i}`)
        i++
    }
}

criarTabuada(12)