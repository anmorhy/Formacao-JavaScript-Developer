/* 
= atribuicao
== igualdade ignora o tipo da variavel 
=== igualdade
*/
const numero = 0;
const numeroPar = (numero % 2) === 0;

if(numero === 0){
    console.log('o numero e invalido')
}else if(numeroPar){
    console.log('Par')
}
else{
    console.log('Impar')
}


console.log(numeroPar);
