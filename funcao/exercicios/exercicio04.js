//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
function calcular(dividendo, divisor) {
  resultado = Math.floor(dividendo / divisor)
  resto = dividendo % divisor
  return console.log(`Resultado = ${resultado} e Resto = ${resto}`)
}

calcular(9,3)
calcular(4,3)
calcular(7,5)