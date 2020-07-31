// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
const diadasemana = (dia) => {
  if (dia <= 7 && dia > 0) {
    switch (dia) {
      case 1:
      case 7: {
        console.log('Fim de semana')
        break
      }
      default:
        console.log('Dia útil')
    }
  } else {
    console.log('Dia inválido')
  }
}

diadasemana(1)
diadasemana(2)
diadasemana(3)
diadasemana(4)
diadasemana(5)
diadasemana(6)
diadasemana(7)
diadasemana(0)
diadasemana(-2)
