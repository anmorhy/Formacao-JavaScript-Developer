const alunos = ['Joao', 'Victor', 'Marina'];

alunos.push('Renan');//adiciona no final

console.log(alunos[3]);// chama o numero na lista

console.log(alunos.length);// retorna o tamanho da lista

alunos[4] = 'Vinicios';// coloca na posição ou substitui
console.log(alunos);

console.log(alunos.pop());//remove o ultimo
console.log(alunos);

console.log(alunos.shift());//remove o primeiro
console.log(alunos);
//
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma/5);
//
const nome = 'Anmorhy Mor';
for (let i = 0; i < nome.length; i++){
    // console.log(nome[i]);
    
    const letra = nome[i];
    console.log(letra);
}

