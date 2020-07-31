//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

// Dados os valores dos lados do triangulo, definir se são Equiláteros, Isósceles ou Escaleno
function classificacaoTriangulo (ladoA, ladoB, ladoC) {
  if((ladoA === ladoB) && (ladoB === ladoC)){
    console.log('Triângulo Equilátero')
} else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
    console.log('Triângulo Isósceles')
} else {
    console.log('Triângulo Escaleno')
}
}

classificacaoTriangulo(2, 3, 4)
classificacaoTriangulo(2, 3, 3)
classificacaoTriangulo(3, 3, 3)
