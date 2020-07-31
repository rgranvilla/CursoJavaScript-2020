//As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.
//Vigora desde 1582

function isLeapYear(year) {
  leapYear = false
  if((year % 400) == 0) {
    return leapYear = true
  } else if((year % 4) == 0 && (year % 100) != 0) {
    return leapYear = true
  } else {
    return leapYear = false
  }
}

console.log(isLeapYear(1584))
console.log(isLeapYear(1990))
console.log(isLeapYear(2008))
console.log(isLeapYear(2012))
console.log(isLeapYear(2016))
console.log(isLeapYear(2020))
console.log(isLeapYear(100))
console.log(isLeapYear(400))
console.log(isLeapYear(2400))