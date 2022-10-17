const diaDaSemana = (numero) => {
    switch (numero) {
        case 01: 
            return "Segunda"
        case 02: 
            return "Terça"
        case 03: 
            return "Quarta"
        case 04: 
            return "Quinta"
        case 05: 
            return "Sexta"
        case 06: 
            return "Sabado"
        case 07: 
            return "Domingo"
        default:
            return `O número ${numero} não é válido para dia de semana`
    }
}

console.log(diaDaSemana(08))