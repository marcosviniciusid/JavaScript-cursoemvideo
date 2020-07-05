// CONDIÇÕES

if (condicao) {
    // Bloco de código se for verdadeiro
} else {
    // Bloco de código se for falso
}

if (condicao) {
    // Bloco de código se for verdadeiro
} else if (outra condicao) {
    // Bloco de código se essa outra condição for verdadeiro
} else {
    // Bloco de código se nenhuma das anteriores atenderem
}

// Condição simples

if (condicao) {
    // true
}

// Condição composta

if (condicao) {
    // true
} else {
    // false
}

// EXEMPLO

let velocidade = 60
console.log(`A velocidade do seu carro é ${velocidade}Km/h`)

if (velocidade > 60) {
    console.log('Você ultrapassou a velocidade permitida!')
} else {
    console.log(`Dirija sempre usando cinto de segurança!`)
}

// Condição alinhada

if (cond_01) {
    // Bloco 01
} else {
    if (cond_02) {
        // Bloco 02
    } else {
        // Bloco 03
    }
}

var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 18) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio!')
}

var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao extamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// Condição simples

// switch (expressão) {
    case valor1:
        // Bloco
        break
    case valor2:
        // Bloco
        break
    default:
        // Bloco
        break
}

var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[Erro] Dia invalido!')
}