let qualEhMaior = (x, y, z) => {
    if (x > y && x > z) {
        return x   
    }if (y > x && y > z)  {
        return y    
    }if (x = y = z) {
        return x
    }
}

console.log (qualEhMaior (0.1, 0.01, 0.2))