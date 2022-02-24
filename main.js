const listaDeTeclas = document.querySelectorAll('.tecla');

function ReproduzSom (idDoSom){
    document.querySelector(idDoSom).play();
}

for(i = 0; i < listaDeTeclas.length; i++){
    
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        ReproduzSom(idAudio);
    }

    tecla.onkeydown = function (evento){
        console.log(evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter')
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
