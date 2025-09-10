function meuEscopo(){
const form = document.querySelector('.form'); // guarda todo os dado do form
const resultado= document.querySelector('.resultado');  //, onde os dados do resultados serão exibidos.
const pessoas = []; // Ele será usado para armazenar objetos
}

function recebeEventoForm(evento){
    evento.preventDefault(); // Evita o comportamento padrão 

    const nome = form.querySelector('.nome');
    const idade = form.querySelector('.idade');
    const nota = form.querySelector('.nota');

    pessoas.push({
        nome: nome.value,
        idade: idade.value,
        nota: nota.value,
    })


console.log (pessoas);

resultado.innerHTML += `<p>Seu nome é ${nome.value}  - ${idade.value} de idade, ${nota.value} em matemática</p>`;
}
form.addEventListener('submit', recebeEventoForm);



meuEscopo(); // Executa a função principal

