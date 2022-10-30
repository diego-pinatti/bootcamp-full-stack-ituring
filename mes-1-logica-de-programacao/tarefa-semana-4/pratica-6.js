function criaFilme() {
    
    let novoFilme = {
        titulo: "Estrelas Além do Tempo",
        notaDeAvaliacao: 7.8,
        duracao: 127,
        anoDePublicacao: 2016,
        categoria: "Drama"
    }

    console.log(`O filme ${novoFilme.titulo} que estreou em ${novoFilme.anoDePublicacao} tem a avaliação de ${novoFilme.notaDeAvaliacao} no IMDB.`)
}

criaFilme()