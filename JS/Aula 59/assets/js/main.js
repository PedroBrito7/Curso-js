function criaCalculadora() {
  return {
    display: document.querySelector('.display'), // pega o input da tela e guarda no objeto

    inicia() { // método inicial
      this.cliqueBotoes();       // chama cliqueBotoes() -> "this" é a calculadora
      this.pressionaBackSpace(); // chama pressionaBackSpace() -> "this" é a calculadora
      this.pressionaEnter();     // chama pressionaEnter() -> "this" é a calculadora
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        // Arrow function => mantém "this" como calculadora
        if (e.keyCode === 8) { // se tecla Backspace
          e.preventDefault();   // evita apagar só 1 caractere
          this.clearDisplay();  // chama método do objeto -> limpa tudo
        }
      });
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        // Arrow function => mantém "this" como calculadora
        if (e.keyCode === 13) { // se tecla Enter
          this.realizaConta();  // chama método do objeto -> faz conta
        }
      });
    },

    realizaConta() {
      let conta = this.display.value; // pega texto do input

      try {
        conta = eval(conta); // avalia a expressão (ex: "2+2" vira 4)

        if (!conta) { // se resultado for falsy (atenção: 0 cai aqui também!)
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta); // coloca resultado no input
      } catch(e) {
        alert('Conta inválida'); // erro no eval
        return;
      }
    },

    clearDisplay() {
      this.display.value = ''; // limpa o input
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); 
      // corta o último caractere da string
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        // Arrow function => mantém "this" como calculadora
        const el = e.target; // elemento clicado

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText); // adiciona número ao display
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay(); // limpa tudo
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm(); // apaga 1 caractere
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta(); // calcula
        }

        this.display.focus(); // mantém o foco no input
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor; // concatena valor clicado no input
    }

  };
}

const calculadora = criaCalculadora(); // cria objeto com métodos e propriedades
calculadora.inicia(); // começa: adiciona todos os listeners
