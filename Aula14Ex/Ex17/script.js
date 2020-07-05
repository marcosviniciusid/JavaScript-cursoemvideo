let $num = document.querySelector('#txtnum')
let tab = document.querySelector('#txttabuada')

function tabuada() {
    if ($num.value.length == 0) {
        alert('[ERROR] Digite um número!')
    } else {
        tab.innerHTML = ""
        c = 1
        let num = Number($num.value)
        while (c <= 10) {
            let optionElem = document.createElement('option')
            optionElem.text = `${num} X ${c} = ${num*c}`
            optionElem.value = `tab${c}`
            tab.appendChild(optionElem)

            c++
        }
    }
}