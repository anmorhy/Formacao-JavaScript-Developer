/* Faça um Programa calcular o valor de uma viagem.
* Voce tera 5 variaveis
*   1 - Preço do etanol;
*   2 - Preço da gasolina
*   3 - O tipo do conbustivel que esta no seu carro;
*   4 - Gasto médio de combustivel do carro por KM.
*   5 - Distancia em KM da viagem.
*   imprima no console o valor que sera gasto de combustivel para realizar essa viagem. 
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if(tipoCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{ 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
