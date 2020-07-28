function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max-min) + min
  return Math.floor(valor)
}

let opcao = -1
 // executa pelo menos uma vez
 do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opcão escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')