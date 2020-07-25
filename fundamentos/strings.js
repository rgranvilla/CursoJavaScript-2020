const escola = "Cod3r"

// retorna o caracter no índice 4
console.log(escola.charAt(4))

//não gera erro quando está fora do tamanho da string, retorna um valor vazio
console.log(escola.charAt(5))

// retorna o valor do character na tabela Unicode
console.log(escola.charCodeAt(3))

// retorna o valor do índice que tenha o character procurado
console.log(escola.indexOf('d'))

// retorna a substring a partir do índice 1
console.log(escola.substring(1))

// retorna a substring a partir do índice 0 até o índice 3 (sem incluir o índice 3)
console.log(escola.substring(0,3))

// Concatenar os valores na string, usando um literal 'Escola '
// no contesto de string o valor é concatenado
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

// subistitui o character de valor 3 por 'e'
console.log(escola.replace(3, 'e'))

// regex, troca todos os decimais por 'e'
console.log(escola.replace(/\d/, 'e'))

// regex, troca todas as letras e numeros por 'e'
console.log(escola.replace(/\w/, 'e'))

// para mais informação sobre regex: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp

// converter a string em um Array a partir do 
console.log('Ana,Maria,Pedro'.split(','))