// aninhado

const num = Number(prompt('digite aqui um número escolhido'))

if(num % 2 == 0){
    if(num % 3 == 0){
        console.log('o numero é divisivel por 2 e por 3')
    } else {
        console.log('o número é divisivel por 2 mas não é divisivel por 3')
    }
} else if(num % 3 == 0){
    console.log('o numero é divisivel por 3 mas não é divisivel por 2')
} else {
    console.log('o numero não é divisivel por 2 e nem por 3')
}

// operador logico

if(num % 2 == 0  || num % 3 == 0){
    console.log('este numero é divisivel por 2 ou 3')
} else {
    console.log('o numero não é divisivel por 2 e nem por 3')
}
