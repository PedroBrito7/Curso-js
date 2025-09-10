function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,   // mostra a chave quando enumerar
    value: estoque,     // valor inicial
    writable: true,     // pode alterar depois
    configurable: true  // permite deletar ou reconfigurar
  });
}
// valor do parametro 
const p1 = new Produto('Camiseta', 20, 3);

// Mostra apenas as chaves do objeto
console.log(Object.keys(p1)); 

// Percorre as chaves com for...in
for (let chave in p1) {
  console.log(chave);
}

console.log(p1); 
