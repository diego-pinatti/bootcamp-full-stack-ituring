function tradutor(idioma) {
    if (idioma == 'fr' ) {
        return "Bonjour le monde!"
    } else if (idioma == 'es') {
        return "Hola Mundo!"
    } else if (idioma == 'en') {
        return "Hello World!"
    } else {
        return "Olá, Mundo!"
    }
}

console.log (tradutor('fr'))