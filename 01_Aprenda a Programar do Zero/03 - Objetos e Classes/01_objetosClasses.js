const  pessoa = {
    nome: 'Anmorhy',
    idade: 26,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
// pessoa.descrever = function(){
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
// }

// pessoa.nome = 'Anm';
// pessoa.idade = 30;
// pessoa.descrever();
const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);
pessoa['nome']= 'teste'; //dinamico
pessoa.nome = 'teste';//direto

class Pessoa {
    nome;
    idade;
    

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    } 
    descrever2(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const anmorhy = new Pessoa();
anmorhy.nome = 'Anmo r';
anmorhy.idade = 25;
console.log(anmorhy);
anmorhy.descrever2();
const alice = new Pessoa('Alice',25);

const anm = new Pessoa();
anm.nome = 'Anm';
anm.idade = 29;
console.log(anmorhy);
anm.descrever2();
const anne = new Pessoa('Anne', 30);

console.log(alice);
console.log(anne);

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
compararPessoas(alice,anne);
