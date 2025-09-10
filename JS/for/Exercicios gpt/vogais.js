let palavra = ("Digite uma palavra:");
let vogais = 0;

for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i].toLowerCase();

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vogais++;
  }
}

console.log(`A palavra "${palavra}" tem ${vogais} vogais.`);
