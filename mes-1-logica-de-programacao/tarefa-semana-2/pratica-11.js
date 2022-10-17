const corEmRgb = (cor) => {
    switch (cor) {
        case "vermelha":
            return '"vermelha" -> "rgb(255,0,0)"'
        case "laranja":
            return '"laranja" -> "rgb(255,128,0)"'
            break
        case "amarela":
            return '"amarela" -> "rgb(255,255,0)"'
            break
        case "verde":
            return '"verde" -> "rgb(,255,)"'
            break
        case "azul claro":
            return '"azul claro" -> "rgb(0,255,255)"'
        default:
            return '"rgb(255,255,255)"'
    }
}

console.log(corEmRgb ("amarela"))