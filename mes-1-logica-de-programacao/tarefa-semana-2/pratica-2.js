function nomeComprador(nome){
    return `Olá ${nome}!`
}

function outrasInformacoes(produto, recebidoPor, enderecoEntrega) {
    return `Fizemos a entrega do produto ${produto} no endereço ${enderecoEntrega} com sucesso!\n O seu produto foi recebido por: ${recebidoPor}\n Esperamos que você esteja contente com o produto.\n Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`
}

function assinatura(emailEnviadoPor){
    return `Atenciosamente,\n ${emailEnviadoPor}`
}

let mensagemUm =  nomeComprador("Roberto")
let mensagemDois =  outrasInformacoes("bola","Diego","Limeira")
let mensagemTres =  assinatura("João")

console.log(mensagemUm, mensagemDois, mensagemTres)