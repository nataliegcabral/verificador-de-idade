
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var year = document.getElementById('ano')
    var resultado = document.getElementById('res')
    var alerta = document.getElementById('aviso')
    
     
    if (year.value.length == 0 || Number(year.value) > ano) {
        alert('[ERRO] Digite um ano de nascimento válido.')
    } else {
        var pet = document.getElementsByName('pet')
        var sex = document.getElementsByName('sex') 
        var alerta = document.querySelector('div#aviso')
        var idade = ano -  Number(year.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        resultado.innerHTML = ''
        alerta.innerHTML = ''
        

        if (pet[0].checked && sex[0].checked) {
            if (idade < 1) {
                genero = 'gatinha fêmea filhote'
                img.setAttribute('src', 'pets/gato-filhote.png')
                //nenem
            } else if (idade <= 7) {
                genero = 'gata fêmea adulta'
                img.setAttribute('src', 'pets/gato-adulto.png')
                //gatinha adulta
            } else if (idade <= 12) {
                genero = 'gata fêmea idosa'
                img.setAttribute('src', 'pets/gato-idoso.png')
                //gatinha idosa
            } else if (idade > 12 && idade <= 30) {
                genero = 'gata fêmea geriátrica'
                img.setAttribute('src', 'pets/gato-idoso.png')
                //
            } else {
                genero = 'gata anciã'
                alerta.innerHTML = '<p>Essa gatinha já pode ter ido para o céu dos gatinhos, porém...</p>'
            }
        } else if (pet[0].checked && sex[1].checked) {
            if (idade < 1) {
                genero = 'gatinho macho filhote'
                img.setAttribute('src', 'pets/gato-filhote.png')
            } else if (idade <= 7) {
                genero = 'gato macho adulto'
                img.setAttribute('src', 'pets/gato-adulto.png')
            } else if (idade <= 12) {
                genero = 'gato macho idoso'
                img.setAttribute('src', 'pets/gato-idoso.png')
            } else if (idade > 12 && idade <= 30) {
                genero = 'gato macho geriátrico'
                img.setAttribute('src', 'pets/gato-idoso.png')
            } else {
                genero = 'gato ancião'
                alerta.innerHTML = '<p>Esse gatinho já pode ter ido para o céu dos gatinhos, porém...</p>'
            }
        } else if (pet[1].checked && sex[0].checked) {
            if (idade < 1) {
                genero = 'cachorrinha fêmea filhote'
                img.setAttribute('src', 'pets/cachorro-filhote.png')
            } else if (idade <= 7) {
                genero = 'cachorra fêmea adulta'
                img.setAttribute('src', 'pets/cachorro-adulto.png')
            } else if (idade <= 12) {
                genero = 'cachorra fêmea idosa'
                img.setAttribute('src', 'pets/cachorro-idoso.png')
            } else if (idade > 12 && idade <= 30) {
                genero = 'cachorra fêmea geriátrica'
                img.setAttribute('src', 'pets/cachorro-idoso.png')
            } else {
                genero = 'cachorra anciã'
                alerta.innerHTML = '<p>Essa cachorrinha já pode ter ido para o céu dos cachorrinhos, porém...</p>'
            }
        } else if (pet[1].checked && sex[1].checked) {
            if (idade < 1) {
                genero = 'cachorrinho macho filhote'
                img.setAttribute('src', 'pets/cachorro-filhote.png')
            } else if (idade <= 7) {
                genero = 'cachorro macho adulto'
                img.setAttribute('src', 'pets/cachorro-adulto.png')
            } else if (idade <= 12) {
                genero = 'cachorro macho idoso'
                img.setAttribute('src', 'pets/cachorro-idoso.png')
            } else if (idade > 12 && idade <= 30) {
                genero = 'cachorro macho geriátrico'
                img.setAttribute('src', 'pets/cachorro-idoso.png')
            } else {
                genero = 'cachorro ancião'
                alerta.innerHTML = '<p>Esse cachorrinho já pode ter ido para o céu dos cachorrinhos, porém...</p>'
            }
        }

        
        res.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} aninhos.`
        res.appendChild(img)
    }

}
