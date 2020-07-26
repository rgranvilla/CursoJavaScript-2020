// variavel definida por var é vista de fora do bloco

{ 
  { 
    { 
      { 
        var sera = 'Será???' 
        console.log(sera)
      } 
    } 
  } 
}

console.log(sera)

// a variável var estará visível no escopo da function apenas

function teste() {
  var local = 123
}

teste()
console.log(local)
