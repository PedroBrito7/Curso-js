let contador = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    contador++; // Conta 1 a mais cada vez que encontra um número par
  }
}

console.log(`Existem ${contador} números pares entre 1 e 50.`);
