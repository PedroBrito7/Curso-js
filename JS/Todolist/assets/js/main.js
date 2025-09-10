// Seleciona os elementos principais
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');
const btnTema = document.querySelector('.btn-tema'); // Botão de troca de tema

// Cria um <li> vazio (item da lista)
function criaLi() {
  const li = document.createElement('li');
  return li;
}

// Captura o "Enter" no input e adiciona tarefa
inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) { // Se a tecla for Enter
    if (!inputTarefa.value) return; // Impede tarefa vazia
    criaTarefa(inputTarefa.value);
  }
});

// Limpa o campo depois de adicionar a tarefa
function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

// Cria o botão "Apagar" dentro da tarefa
function criaBotaoApagar(li) {
  li.innerText += ' '; // Espaço antes do botão
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar'); // Classe para estilizar
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

// Cria a tarefa (li + botão apagar)
function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput; // Texto da tarefa
  tarefas.appendChild(li); // Adiciona no UL
  limpaInput(); // Limpa o campo
  criaBotaoApagar(li); // Adiciona botão apagar
  salvarTarefas(); // Salva no localStorage
}

// Clique no botão "Adicionar"
btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return; // Impede tarefa vazia
  criaTarefa(inputTarefa.value);
});

// Clique em "Apagar" remove a tarefa
document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) { // Se clicou no botão apagar
    el.parentElement.remove(); // Remove o <li>
    salvarTarefas(); // Atualiza localStorage
  }
});

// Salva todas as tarefas no localStorage
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  // Percorre as tarefas e pega apenas o texto
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  // Converte para JSON e salva
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

// Recarrega as tarefas salvas no localStorage
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas(); // Executa ao carregar a página

// ===== Alternar Tema (Light/Dark) =====
btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark'); // Alterna a classe "dark"

  // Troca o texto do botão
  if (document.body.classList.contains('dark')) {
    btnTema.textContent = '☀️ Light Mode';
  } else {
    btnTema.textContent = '🌙 Dark Mode';
  }
});
