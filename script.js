// Mapeamento dos elementos HTML
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const lengthInput = document.getElementById('length');
const lengthVal = document.getElementById('length-val');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');

// Grupos de caracteres
const chars = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Atualiza o texto do tamanho dinamicamente
lengthInput.addEventListener('input', (e) => {
    lengthVal.textContent = e.target.value;
});

// Função principal de geração
function generatePassword() {
    let pool = '';
    let guaranteed = [];

    if (uppercaseCheck.checked) {
        pool += chars.uppercase;
        guaranteed.push(chars.uppercase[Math.floor(Math.random() * chars.uppercase.length)]);
    }
    if (lowercaseCheck.checked) {
        pool += chars.lowercase;
        guaranteed.push(chars.lowercase[Math.floor(Math.random() * chars.lowercase.length)]);
    }
    if (numbersCheck.checked) {
        pool += chars.numbers;
        guaranteed.push(chars.numbers[Math.floor(Math.random() * chars.numbers.length)]);
    }
    if (symbolsCheck.checked) {
        pool += chars.symbols;
        guaranteed.push(chars.symbols[Math.floor(Math.random() * chars.symbols.length)]);
    }

    // Validação caso nenhum checkbox esteja marcado
    if (pool === '') {
        passwordDisplay.textContent = 'Selecione uma opção!';
        passwordDisplay.style.color = '#e04545';
        return;
    }

    passwordDisplay.style.color = '#04d361';
    let length = parseInt(lengthInput.value);
    let finalPassword = [...guaranteed];

    // Preenche o resto do tamanho com caracteres aleatórios da pool
    for (let i = finalPassword.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        finalPassword.push(pool[randomIndex]);
    }

    // Embaralha o resultado final utilizando o algoritmo de Fisher-Yates
    for (let i = finalPassword.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [finalPassword[i], finalPassword[j]] = [finalPassword[j], finalPassword[i]];
    }

    passwordDisplay.textContent = finalPassword.join('');
}

// Função para copiar para a área de transferência
function copyToClipboard() {
    const password = passwordDisplay.textContent;
    if (!password || password === 'Sua senha aparecerá aqui' || password === 'Selecione uma opção!') return;

    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada com sucesso!');
    });
}

// Eventos de clique
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);
