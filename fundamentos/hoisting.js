// Javascript permite o hoisting(içamento)

console.log('a =', a)
var a = 2
console.log('a =', a)

// Abaixo temos o que o Javascript faz para executar o código
/*
var a                     //declara uma variável a
console.log('a =', a)     //retorna a=undefined
a = 2                     //atribui o valor 2 à variável a
console.log('a =', a)     //retorna a=2
*/
// Esse é o efeito do hoisting do Javascript
// Prefira sempre declarar a variável antes, evite usar o hoisting

// Já declaração de variável com let não gera o hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)