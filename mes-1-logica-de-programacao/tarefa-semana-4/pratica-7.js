function exibirChaves(produto) {
    console.log(Object.keys(produto))
}

let produto1 = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
}

exibirChaves(produto1)