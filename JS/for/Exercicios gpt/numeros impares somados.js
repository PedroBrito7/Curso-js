let soma = 0;
let impares = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    soma += i;
    impares += i + " ";
  }
}

console.log(`Todos os números ímpares são: ${impares}`);
console.log(`A soma deles é: ${soma}`);
