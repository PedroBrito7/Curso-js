//Mostre no console todos os números de 1 a 30 que são divisíveis por 3.
let divisiveis=''
for (let i= 1; i <=30 ; i++ ){
    if( i % 3===0 ){
    divisiveis += i;
  }
    console.log(`Os divisiveis de 1 a 30 são ${divisiveis} ao todos são ${divisiveis.length}`)
}