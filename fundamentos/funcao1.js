// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // falta de parametro soma com undefined
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // excesso de parametros soma apenas os parametros da funcão, no caso os dois primeiros
imprimirSoma()
imprimirSoma("Olá ", "Mundo!")

// Função com retorno
// o segundo parametro foi tratado para receber o 0 como padrão.
function soma(a, b = 0) {
  return a + b
}

console.log(soma(2,3))
console.log(soma(2))
