function ehPrimo (n) {
    let i = 2
    while (i <= n) {
        if (i === n)
        return true
        
        if (n % i === 0) {
            return false
        }
        i++
    }  
} 

console.log(ehPrimo(17))
console.log(ehPrimo(2))
console.log(ehPrimo(7))
console.log(ehPrimo(8))
console.log(ehPrimo(5))
console.log(ehPrimo(23))
console.log(ehPrimo(15))
console.log(ehPrimo(1500450271))