/* Crie uma classe para representar carros.
* Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
* Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor
* gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercuso(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }
}
    const uno = new Carro('Fiat', 'Prata', 1/12);
    console.log(uno);
    console.log(uno.calcularGastoDePercuso(70,5));

    const palio = new Carro('Fiat', 'Preto', 1/10);
    console.log(palio);
    console.log(palio.calcularGastoDePercuso(70,5));