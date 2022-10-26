function geraGruposDe2(lista) {
    const qtdGrupos = Math.floor(lista.length/2)
    let grupos = []

    for(let i = 0; i < qtdGrupos; i++) {
        grupos.push(lista.slice(i*2, i*2 + 2))
    }

    if(lista.length % 2 != 0) {
        grupos[grupos.length-1].push(lista[lista.length-1])
    }

    return grupos

}

let l = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

console.log(geraGruposDe2(l))