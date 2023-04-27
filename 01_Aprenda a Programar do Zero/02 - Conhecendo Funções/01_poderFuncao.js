function sayMyName(name){
    console.log('Your Name is:' + name )
}
sayMyName('Anmorhy')
//
function quadrado(valor){
    return valor * valor;
}
console.log(quadrado(10) + quadrado(10) )
//
function inrementarJuros(valor, percentualJuros){
   const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}
console.log(inrementarJuros(100, 10));
//
function main(){
    console.log('Programa Principal')
}
main();