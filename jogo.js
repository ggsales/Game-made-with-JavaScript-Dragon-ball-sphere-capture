var altura = 0 
var largura = 0 
var vidas = 1
var tempo = 15

var criaTempoEsfera = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normal') {
    //1500
    criaTempoEsfera = 1500
}else if( nivel === 'dificil') {
        //1000
        criaTempoEsfera = 1000
} else if (nivel === 'maisdeoitomil') {
    //750
    criaTempoEsfera = 850
}

function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth
        
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()
var cronometro = setInterval(function() {

    tempo -=1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaEsfera)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica() {


    //remover esfera anterior
    if(document.getElementById('esfera')) {
        document.getElementById('esfera').remove()

        if(vidas > 3){
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src="imagens/esfera-vazia.png"

            vidas++
        }
    }
    


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //cria elemento html
    var esfera = document.createElement('img')
    esfera.src = 'imagens/esfera.png'
    esfera.className = tamanhoAleatorio() + ' ' + ladoAletorio()
    esfera.style.left = posicaoX + 'px'
    esfera.style.top = posicaoY + 'px'
    esfera.style.position = 'absolute'
    esfera.id = 'esfera'
    esfera.onclick = function() {
        this.remove()
    } 

    document.body.appendChild(esfera)

}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)


    switch(classe){
        case 0:
            return 'esfera1'
        case 1:
            return 'esfera2'
        case 2:
            return 'esfera3'
    }

}

function ladoAletorio(){
    var classe = Math.floor(Math.random() * 2)


    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }


}