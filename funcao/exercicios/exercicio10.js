//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
function multiploDe3(numero) {
  if(numero%3 == 0){
    return true
  } else {
    return false
  }
}

console.log(multiploDe3(15))
console.log(multiploDe3(21))
console.log(multiploDe3(30))
console.log(multiploDe3(9))
console.log(multiploDe3(3))
console.log(multiploDe3(2))
console.log(multiploDe3(22))
console.log(multiploDe3(125))
console.log(multiploDe3(13))