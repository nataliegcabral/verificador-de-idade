function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var alerta = document.querySelector('div#aviso')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        alerta.innerHTML = ''
        
        if (fsex[0].checked) {
           if (idade >= 0 && idade < 8) {
            genero = 'menino'
                img.setAttribute('src', 'fotos/foto-crianço.png')

            } else if (idade < 15) {
                genero = 'menino'
                img.setAttribute('src', 'fotos/foto-menino.png')

            }  else if (idade < 20) {
                genero = 'menino'
                img.setAttribute('src', 'fotos/foto-hjovem.png')

            }  else if (idade < 40) {
                genero = 'homem'
                img.setAttribute('src', 'fotos/foto-homem.png')

            }   else if (idade < 55) {
                genero = 'homem' 
                img.setAttribute('src', 'fotos/foto-adulto.png')

            } else if (idade < 70) {
                genero = 'homem'
                img.setAttribute('src', 'fotos/foto-homemvelho.png')

            }  else if (idade < 140) {
                genero = 'homem'
                img.setAttribute('src', 'fotos/foto-idoso.png')

            }  else {
                genero = 'homem' 
                alerta.innerHTML = '<p>Essa pessoa já é velha demais para estar viva, porém...</p>'
            } 

        } else if (fsex[1].checked) {
             
             if (idade >= 0 && idade < 8) {
                genero = 'menina' 
                img.setAttribute('src', 'fotos/foto-criança.png')

            } else if (idade < 15) {
                genero = 'menina' 
                img.setAttribute('src', 'fotos/foto-menina.png')

            }  else if (idade < 20) {
                genero = 'menina' 
                img.setAttribute('src', 'fotos/foto-mjovem.png')

            }  else if (idade < 40) {
                genero = 'mulher' 
                img.setAttribute('src', 'fotos/foto-mulher.jpeg')

            }  else if (idade < 55) {
                genero = 'mulher' 
                img.setAttribute('src', 'fotos/foto-adulta.jpeg')

            } else if (idade < 70) {
                genero = 'mulher' 
                img.setAttribute('src', 'fotos/foto-adultavelha.png')

            }  else if (idade < 140) {
                genero = 'mulher' 
                img.setAttribute('src', 'fotos/foto-idosa.png')

            }  else {
                genero = 'mulher' 
                alerta.innerHTML = '<p>Essa pessoa já é velha demais para estar viva, porém...</p>'
            }    
        }
            
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
            
    }
            
}
       