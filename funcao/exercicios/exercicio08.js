//Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// indice: " 0  1  2 3  4 5 6  7 8"
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

function avaliacao(lista) {
  let valores = lista.split([' '])
  for(let i in valores){
    valores[i] = parseInt(valores[i])
  }
  let recordCount = 0
  let auxIndex = 0
  let worstScoreIndex = 0
  for(let i=0; i < valores.length; i++) {
    if (valores[i+1] > valores[i]) {
      recordCount++
      auxIndex = i
      if (valores[auxIndex] < valores[worstScoreIndex]) {
        worstScoreIndex = auxIndex
      }
    }
  }
  let resultado = []
  resultado.push(recordCount)
  resultado.push(worstScoreIndex)
  return resultado
}

console.log(avaliacao('10 20 20 8 25 3 0 30 1'))