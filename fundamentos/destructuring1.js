// novo recurso do ES2015

const pessoa = {
  nome : 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

// tire de dentro do objeto o nome e a idade
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome:n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// sempre ter a certeza da estrutura do caminho para desestruturar
/* gera um erro pois o caminho não existe, diferente de um atributo undefined
const { conta: { ag, num}} = pessoa
console.log(ag, num)
*/