function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "manha.png"
        document.body.style.background = "#BCB2A0"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = "#D58E58"
    } else {
        // BOA NOITE
        img.src = "noite.png"
        document.body.style.background = "#9479B1"
    }
}