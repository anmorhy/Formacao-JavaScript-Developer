/* Faça um Programa calcular o valor de uma viagem.
* Voce tera 3 variaveis
*   1 - Preço do combustivel.
*   2 - Gasto médio de combustivel do carro por KM.
*   3 - Distancia em KM da viagem.
*   imprima no console o valor que sera gasto de combustivel para realizar essa viagem. 
*/

const precoCombustivel = 5.79;
const kmLitro = 12;
const distanciaKm = 1580;
const litrosConsumidos = distanciaKm / kmLitro; 
const valorGasto = litrosConsumidos * precoCombustivel;
console.log('O valor gasto de combustivel e de: ' + valorGasto.toFixed(2) + 'R$');

