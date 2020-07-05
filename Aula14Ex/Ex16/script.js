function contar() {
    // Pegando dados
    let $start = document.querySelector('#txtstart')
    let $fim = document.querySelector('#txtfim')
    let $passo = document.querySelector('#txtpasso')
    let res = document.querySelector('#res')
    // Tratando dados
    let start = Number($start.value)
    let fim = Number($fim.value)
    let passo = Number($passo.value)

    // Validando os campos
    if ($start.value.length == 0 || $fim.value.length == 0 || $passo.value.length == 0 || passo == 0) {
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        if (start < fim) {
            // Crescente
            for (start; start <= fim; start += passo) {
                if (start == fim) {
                    res.innerHTML += `\u23fa ${start}`
                } else {
                    res.innerHTML +=  `\uD83D\uDE00${start} `
                }
            }
        } else {
            // Decrescente
            for (start; start >= fim; start -= passo) {
                if (start == fim) {
                    res.innerHTML += `\u23fa ${start}`
                } else {
                    res.innerHTML +=  `\uD83D\uDE00${start} `
                }
            }
        }

        
    }
}


