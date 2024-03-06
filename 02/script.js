// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

const numInformado = Number(window.prompt('Informe um número para verificar se ele pertence à sequência de Fibonacci:'))
// const numInformado = 40

const sequenciaFibonacci = [0, 1]

//calcula fibonacci até que o número informado seja menor que o próximo número da sequência
function calcularFibonacci(numInformado) {
    let a = 0
    let b = 1
    let c = 0
    
    if(numInformado === 0) {
        sequenciaFibonacci.push(0)
        return 0
    }

    if(numInformado === 1) {
        sequenciaFibonacci.push(1)
        return 1
    }


    for (let i = 0; c <= numInformado; i++) {
        c = a + b;
        a = b;
        b = c

        sequenciaFibonacci.push(c)
    }

    return c
}

calcularFibonacci(numInformado)

if(sequenciaFibonacci.includes(numInformado)) {
    document.write(`O número ${numInformado} pertence à sequência de Fibonacci! 🎉`)
} else {
    document.write(`O número ${numInformado} não pertence à sequência de Fibonacci! 🛑`)
}






// document.write(`${numInformado}`)