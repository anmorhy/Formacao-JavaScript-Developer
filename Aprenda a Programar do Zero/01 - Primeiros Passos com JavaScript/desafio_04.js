/**
 * O IMC - INDICE DE MASSA CORPORAL  é um criterio da Organização Mundial de Saude para dar
 * uma indicação sobre a condição de peso de uma pessoa adulta.
 * Formula do IMC:
 * IMC = peso / (altura * altura)
 * Elabore um algoritmo que dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela a baixo.
 * IMC em adultos a condição:
 * - abaixo de 18.5 Abaixo do peso;
 * - Entre 18.5 e 25 Peso normal;
 * - Entre 25 e 30 Acima do Peso;
 * - Entre  30 e 40 Obeso;
 * - Acima de 40 Obesidade Grave;
 */

const peso = 52;
const altura = 1.59;
const imc = peso / Math.pow(altura, 2);
console.log(imc);
if(imc < 18.5){
    console.log("Abaixo do peso");

}else if(imc >= 18.5 && imc < 25){
    console.log("Peso Normal");
    
}else if(imc >= 25 && imc < 30){
    console.log("Acima do Peso");
    
}else if(imc >= 30 && imc < 40){
    console.log("Obeso");
    
}else if(imc >= 40){
    console.log("Obesidade Grave");
}
