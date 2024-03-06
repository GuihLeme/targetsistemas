const stringInformada = window.prompt('Informe a string que deseja inverter seus caracteres:')

function inverteString(stringInformada) {
  const arrayDaStringInformada = stringInformada.split('')
  const arrayInvertido = []

  for (index in arrayDaStringInformada) {
    arrayInvertido[index] = arrayDaStringInformada[arrayDaStringInformada.length - 1 - index]
  }
  
  return arrayInvertido
}

const stringInvertida = inverteString(stringInformada).join('')

document.writeln(`A string informada foi: ${stringInformada} e a string invertida é: ${stringInvertida}`)