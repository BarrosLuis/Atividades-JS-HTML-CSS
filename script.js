function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO | Verifique o ano e tente novamente')
    }  else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            res.innerHTML = `Idade calculada: ${idade} anos`
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'um homem'
                if (idade >= 0 && idade < 12) {
                    //criança
                    img.setAttribute('src', 'homemcriança.png')
                }
                else if (idade < 21) {
                    // jovem
                    img.setAttribute('src', 'homemjovem.png')
                } else if (idade <50) {
                    // adulto
                    img.setAttribute('src', 'homemadulto.png')
                } else {
                    // idoso
                    img.setAttribute('src', 'homemidoso.png')
                }
            }else {
                gênero = 'uma mulher'
                if (idade >= 0 && idade < 12) {
                    //criança
                    img.setAttribute('src', 'mulhercriança.png')
                }
                else if (idade < 21) {
                    // jovem
                    img.setAttribute('src', 'mulherjovem.png')
                } else if (idade <50) {
                    // adulto
                    img.setAttribute('src', 'mulheradulta.png')
                } else {
                    // idosa
                    img.setAttribute('src', 'mulheridosa.png')
                }
            }
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.appendChild(img)
        }

}