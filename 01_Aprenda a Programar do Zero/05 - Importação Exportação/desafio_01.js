/**
 * Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100
 * Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado
 * 
 * entrada= 5,50,10,98,23.
 * saida= 98.
 */
const {gets, print} = require('./01_funcaoAuxiliar');
const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}
print(numerosSorteados);

let maiorValor = -1;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
    
}
print(maiorValor);