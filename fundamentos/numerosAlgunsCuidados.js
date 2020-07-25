// retorna valor da divisão por zero como infinito
console.log(7  / 0) 

// converte a string em number quando o valor é válido
console.log("10" / 2)

// retorna um NaN (not a number)
console.log("Show!" * 2) 

//a soma retorna o valor 0.7999999999999999 seguindo o padrão IEEE Standard for Floating-Point Arithmetic (IEEE 754)
console.log(0.1 + 0.7) 

// não converte number em string dessa forma
// console.log(10.toString())

// Retorna o valor com 2 decimais fixos
console.log((10.345).toFixed(2))

// Retorna o valor com 7 algarismo (inclusive os decimais)
console.log((1045.37422).toPrecision(7))

// Concatena os valores em uma string (pelo contesto faz sentido somar string (concatenar))
console.log('3' + 2)

// retorna 1, transforma a string em number (pelo sentido do contesto)
console.log('3' - 2)