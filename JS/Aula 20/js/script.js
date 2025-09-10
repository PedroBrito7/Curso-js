function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Evita o comportamento padrão 

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    // Adiciona a pessoa ao array
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas); // Mostra o array no console

    // Mostra no HTML com template string corretamente
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} - ${peso.value}kg, ${altura.value}m</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo(); // Executa a função principal
