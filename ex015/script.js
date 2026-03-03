function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // bebê
                img.setAttribute('src', 'bebe-menino.jpg')
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'crianca-menino.jpg')
            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'jovem-garoto.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                // bebê
                img.setAttribute('src', 'bebe-menina.jpg')
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'crianca-menina.jpg')
            } else if (idade < 18) {
                // jovem
                img.setAttribute('src', 'jovem-garota.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    
    }

}