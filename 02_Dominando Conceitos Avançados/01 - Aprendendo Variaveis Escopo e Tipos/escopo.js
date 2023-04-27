// Diferença Var Let Const
// Hoisting joga para cima e executa 
//constante se usa letra maiuscula 

if(true){
    var var1 = 10;
    //Var vasa o escopo, sofre hoisting
}
console.log(var1);
//


function teste2(){
    var var2 = 20;
    //Var com function nao vasa o escopo, nao sofre hoisting
}
teste2();
console.log(var2);
//


if(true){
    let var3 = 30;
    //Let nao vasa o escopo quando esta em bloco{}, nao sofre hoisting
}
console.log(var3);
//

//sofre reatribuição
var x = 40;
x = 41;
console.log(x);

//sofre reatribuição
let y = 50;
y = 51;
console.log(ty);

//nao sofre reatribuição
const z = 60;
z = 61;
console.log(z);

