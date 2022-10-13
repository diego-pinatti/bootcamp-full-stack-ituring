

function horaAgora(){
    let horaAtual = new Date()
    horaAtual = horaAtual.toLocaleTimeString()
    console.log("Olá, agora são " + horaAtual)
}

horaAgora()