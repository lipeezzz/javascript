function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#adaf4e'
    } else if (hora >= 18 && hora < 24){
        // BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#1e225c'
    }
}
