let pool = '';
let guaranteed = [];

// Se o usuário quer maiúsculas
if (uppercaseCheck.checked) {
    pool += chars.uppercase;
    guaranteed.push(chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)]);
}
// Se o usuário quer minúsculas
if (lowercaseCheck.checked) {
    pool += chars.lowercase;
    guaranteed.push(chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)]);
}
// Se o usuário quer números
if (numbersCheck.checked) {
    pool += chars.numbers;
    guaranteed.push(chars.numbers[Math.floor(Math.random() * chars.numbers.length)]);
}
// Se o usuário quer caracteres especiais
if (symbolsCheck.checked) {
    pool += chars.symbols;
    guaranteed.push(chars.symbols[Math.floor(Math.random() * chars.symbols.length)]);
}
