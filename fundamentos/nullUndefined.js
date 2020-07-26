let valor // não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

// gera um erro "TypeError" pois a variável esta nula
// console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// caso queira apagar o atributo preço use o comando
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)



