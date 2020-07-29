console.log(soma(3, 4)) // pode ser chamada antes da declaração, já que o javascript carrega as funções primeiramente
// console.log(sub(3, 4)) --> não pode ser chamada antes da declaração quando for function expression
// console.log(mult(3, 4)) --> não pode ser chamada antes da declaração quando for function expression

// functions declaration
function soma(x, y) {
  return x+y
}

// function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))