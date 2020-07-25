const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
      Olá
  ${nome}!`

  console.log(concatenacao, template)

  // É possível usar expressões...
  console.log(`1 + 1 = ${1 + 1}`)

  // usando função arrow dentro de template
  const up = texto => texto.toUpperCase()
  console.log(`Ei... ${up('cuidado')}!`)
