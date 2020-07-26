const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 42
console.log(valores)
console.log(valores.length)

valores[7] = 32
console.log(valores)
console.log(valores.length)

valores[10] = 10
console.log(valores)
console.log(valores.length)

// js aceita varios tipos de variáveis, recomenda-se o uso de dados com o mesmo tipo
// metodo push()
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// metodo pop()
console.log(valores.pop())

// função delete para objetos
delete valores[0]
console.log(valores)

// o array é do tipo Object
console.log(typeof valores)