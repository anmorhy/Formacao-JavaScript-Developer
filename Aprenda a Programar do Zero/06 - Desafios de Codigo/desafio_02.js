/* Faça um programa que receba N (quantidade de números) e seus respectivos valores.
* Imprima o maior número par e o menor número impar.
*/ 
const { gets, print } = require('./funcoes-auxiliares-ex2');

const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero === null || numero > maiorNumeroPar ) {
            maiorNumeroPar = numero;
        }
    }else{
        if(menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
    
}
print('Maior Numero Par: ' + maiorNumeroPar);
print('Menor Numero Impar: '+ menorNumeroImpar);