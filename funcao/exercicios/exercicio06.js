//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
  resultado = (capitalInicial + (capitalInicial * (taxaJuros/100) * tempoAplicacao))
  console.log("R$ " + resultado.toFixed(2).replace('.',','))
}

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => {
  resultado = (capitalInicial*(1+(taxaJuros/100)) ** tempoAplicacao)
  console.log("R$ " + resultado.toFixed(2).replace('.',','))
}

jurosSimples(1000,2,12)
jurosCompostos(1000,2,12)