let num1= 10; //number
let num2= 2.5; //number

// console.log(num1.toString() + num2); /* Converteu a let num1 para string */ 
// num1= num1.toString; // vira string pra sempre 
// console.log(typeof num1); //mostra o tipo dela 
// console.log (num1= num1.toString(2)); Mostra versão binaria dele
//console.log(num1.toFixed (3)); mostra as 3 casas 
//console.log(Number.isInteger(num1)); mostra se o numero ele e inteiro, supondo que ele veio de um banco de dados etc
//let temp= num1 * ('olá') vai dar falso pois nao existe number multiplicando com string

// IEEE 754-2008
// Define que o JavaScript usa ponto flutuante binário para representar números decimais,
// o que pode gerar imprecisões em operações como 0.1 + 0.2

//let num1 = 0.7; // Tipo number, valor inicial 0.7
//let num2 = 0.1; // Tipo number, valor inicial 0.1

// Essas linhas foram comentadas, mas mostram uma forma de contornar o problema
// Somando com escala para evitar erro de ponto flutuante:
// Exemplo de como transformar 0.7 + 0.1 em inteiros: (70 + 10) / 100 = 0.8

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // soma para 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // soma para 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // soma para 1.0


// Aqui, você simula a soma dos 0.1 três vezes, mas com cada passo comentado.
// No final, você usa toFixed para arredondar com duas casas decimais
num1 = Number(num1.toFixed(2)); 
// Isso converte '0.9999999999999999' (por exemplo) em '1.00', depois transforma de volta em número (1)

console.log(num1.toFixed(2)); 
// Exibe no console o número com 2 casas decimais (ex: "1.00")

console.log(Number.isInteger(num1)); 
// Verifica se o número é um inteiro (ex: true para 1, false para 0.8)


