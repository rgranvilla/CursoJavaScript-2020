let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// converter algo em booleano, usando duas negações antes da variável
isAtivo = 1
console.log(!!isAtivo)

// valores que retornam como true
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// valores que retornam com false
console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// expressões lógicas com OR
console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

// Utilizado para retornar o verdadeiro caso a variável seja vazia
//Forma característica de retornar um valor padrão de uma determinada variável
let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Ricardo'
console.log(nome || 'Desconhecido')