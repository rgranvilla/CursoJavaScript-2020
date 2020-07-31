//Faça um algoritmo que calcule o fatorial de um número.
//use strict
function fatorial(numero) {
  if(numero > 0) {
  resultado = 1
  for(let i= numero ; i >= 1; i--) {
    resultado = (resultado * i)
  }
  return resultado
} else {
  return 'Valor inválido'
}
}

console.log(fatorial(4))
console.log(fatorial(0))
console.log(fatorial(-2))
console.log(fatorial(3))
console.log(fatorial(5))
