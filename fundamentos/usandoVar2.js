// comportamento do var no escopo global
var numero = 1
{
  var numero = 2
  console.log('dentro =', numero)
}
console.log('fora =', numero)
