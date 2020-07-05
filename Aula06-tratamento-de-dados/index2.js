var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras. <br>`)
document.write(`Seu nome em minúscula é ${nome.toLowerCase()} <br>`)
document.write(`Seu nome em maiuscula é ${nome.toUpperCase()}`)

var n = 1540.5
alert(n.toFixed(2))

alert(n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))