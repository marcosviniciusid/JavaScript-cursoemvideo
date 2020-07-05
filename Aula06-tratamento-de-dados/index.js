var nome = window.prompt('Qual é o eu nome?')
window.alert('Prazer te conhecer ' + nome + '!')

var n1 = window.prompt('Digite um numero')
var n2 = window.prompt('Digite outro numero')

// Tratando dados
// string para float

var s = Number.parseFloat(n1) + Number.parseFloat(n2) 
window.alert('A soma dos valores é: ' + Number(s))

// (number + number) para adição
// (string + string) para concatenação

// Tratando dados
// Número para string

// String(n)
// n.toString()

window.alert('Segunda exibição: ' + String(s))


// FORMATANDO STRING

/*
var s = 'JavaScript'

'Eu estou aprendendo s'     Não faz interpolação
'Eu estou aprendendo ' + s  Usa concatenação
`Eu estou aprendendo ${s}`  Usa template String

`O aluno ${nome} tem ${idade} anos`

*/


s.lengh     // Quantos caracteres a string tem
s.toUpperCase() // Tudo para 'MAIUSCULAS'
s.toLowerCase() // Tudo para 'minusculas'
