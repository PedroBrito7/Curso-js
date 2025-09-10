//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia= agencia;
    this.conta = conta;
    this.saldo = saldo;
};

// quero sacar depositar e ver saldo

Conta.prototype.sacar = function (valor){ // valor é quanto eu quero sacar
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`) 
        return; 
    };  
    this.saldo -=valor;
};
     
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

/*Vamos especializar essa super classe, vamos criar uma conta corrente e uma conta poupança, cada uma delas tem
um adendo  
EXEMPLO o sacar vai ter um limite por conta ou outros adendos
conta corrente pode ter 100 reais e querer sacar mais de 100 vai conseguir ir e o saldo fica negativo */ 

function CC(agencia, conta, saldo, limite){ 
    Conta.call (this, agencia,conta,saldo);
    this.limite= limite; // criando o limite
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;


CC.prototype.sacar = function (valor){ // valor é quanto eu quero sacar
    if(valor > (this.saldo + this.limite )) { // ele pode sacar negativo até certo limite 
        console.log(`Saldo insuficiente: ${this.saldo}`) 
        return; 
    };  
    this.saldo -=valor;
};




function CP(agencia, conta, saldo, ){ // CONTA POUPANCA
    Conta.call (this, agencia,conta,saldo);
};

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;



const cc = new CC(11, 22, 0, 100) // no caso adicionou limite la nas propriedas do objeto 
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);
console.log()
const cp = new CP(12, 33, 0)
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);

