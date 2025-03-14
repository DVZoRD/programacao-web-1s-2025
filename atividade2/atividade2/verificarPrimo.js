function verificarNumeroPrimo(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false; 
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(verificarNumeroPrimo(0) )
console.log(verificarNumeroPrimo(1) )
console.log(verificarNumeroPrimo(2) )
console.log(verificarNumeroPrimo(3) )
console.log(verificarNumeroPrimo(7) )
console.log(verificarNumeroPrimo(83)) 
console.log(verificarNumeroPrimo(100)); 
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907)); 