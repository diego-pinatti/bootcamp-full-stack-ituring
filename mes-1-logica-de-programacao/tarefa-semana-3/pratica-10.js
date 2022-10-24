function totalVotos (lista) {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for(let i = 0; i < lista.length; i++) {
        
        if(lista[i] == 1) {
            votosBrasil++
        } if(lista[i] == 2) {
            votosArgentina++
        } if(lista[i] == 3) {
            votosEspanha++
        } if(lista[i] == 4) {
            votosPortugal++
        }
    }

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)`)
    
}


const lista = [1, 1, 1, 4, 4, 2, 3, 2]

timePreferido(lista)
totalVotos(lista)