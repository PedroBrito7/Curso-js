const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
// const {id} = pessoa;
// novasPessoas[id] = {..pessoas};   
// esse codigo todo ia mostrar so o id e o indice de onde se encontra cada 

const novasPessoas = new Map ();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas)

// relembra set eu pego uma determinada parte do array : puxaria no caso so o id  
// get eu pego tudo : puxaria no caso o nome e id 
