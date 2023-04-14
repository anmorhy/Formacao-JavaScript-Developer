/**
 * Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre dafaculdade calcule
 * e imprima a sua media e a sua classificacao conforme a tabel abaixo
 * Media = (nota 1 + nota 2 + nota 3 ) / 3;
 * 
 * Classificaçao
 * - Media menor que 5, reprovação;
 * - Media entre 5 e 7, recuperação;
 * - Media acima de 7, aprovado;
 */

const nota1 = 5;
const nota2 = 3;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log("Reprovado");   

} else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
} else {
    console.log("Aprovado");
}