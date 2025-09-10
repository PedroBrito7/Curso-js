const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let timer = null;

function atualizarTimer(){
    const h = horas.toString().padStart(2,'0');
    const m = minutos.toString().padStart(2,'0');
    const s = segundos.toString().padStart(2,'0'); 
    relogio.textContent = `${h}:${m}:${s}`; 
};

function iniciarTimer() {
    if (!timer) { // se não existir timer então 
        timer = setInterval(() => { 
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
            atualizarTimer(); 
        }, 1000); 
    }
}

function pausarTimer() {
    clearInterval(timer);
    timer = null; 
}

function zerarTimer(){
    pausarTimer();
    horas = 0;
    minutos = 0;
    segundos = 0;
    atualizarTimer();
};

iniciar.addEventListener('click', iniciarTimer);
pausar.addEventListener('click', pausarTimer);
zerar.addEventListener('click', zerarTimer);
