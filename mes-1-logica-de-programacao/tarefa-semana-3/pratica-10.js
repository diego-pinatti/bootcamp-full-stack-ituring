function verificaPreferidoDaCopa (votosBrasil, votosArgentina, votosEspanha, votosPortugal) {
    
    if(votosBrasil >= votosArgentina && votosBrasil >= votosEspanha && votosBrasil >= votosPortugal) {
        return "Brasil"
    } else if(votosArgentina >= votosEspanha && votosArgentina >= votosPortugal) {
        return "Argentina"
    } else if(votosEspanha >= votosPortugal) {
        return "Espanha"
    } else {
        return "Portugal"
    }
}

function exibepreferidodaCopa (listaVotos) {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for(let i = 0; i < listaVotos.length; i++) {
        
        if(listaVotos[i] == 1) {
            votosBrasil++
        } if(listaVotos[i] == 2) {
            votosArgentina++
        } if(listaVotos[i] == 3) {
            votosEspanha++
        } if(listaVotos[i] == 4) {
            votosPortugal++
        }
    }

    let preferido = verificaPreferidoDaCopa(votosBrasil, votosArgentina, votosEspanha, votosPortugal)

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)`)
    console.log(`\n`)
    console.log("Resultado:")
    console.log(`${preferido} é o preferido para ganhar a Copa do Mundo!`)
}

const listaVotos = [1, 1, 1, 4, 4, 2, 3, 2]
exibepreferidodaCopa(listaVotos)





