// Como var não tem escopo de função é impresso o valor 10 para as chamadas de funcs[i] para qualquer i

const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}
funcs[2]()
funcs[8]()


