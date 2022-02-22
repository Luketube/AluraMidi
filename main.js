const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

function ReproduzSom (idDoSom){
    document.querySelector(idDoSom).play();
}

for(i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        ReproduzSom(idAudio);
    }
    contador = contador +1 ;
}

