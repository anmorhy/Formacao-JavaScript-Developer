function AplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto/100) ));
}
function AplicarJuros(valor, juros){
    return (valor + (valor * (juros/100) ));
}
const precoEtiqueta = 100;
const formaDePagamento = 4;

if( formaDePagamento === 1){ 
    console.log(AplicarDesconto(precoEtiqueta, 10));
}else if (formaDePagamento === 2){
    console.log(AplicarDesconto(precoEtiqueta, 15));
}else if (formaDePagamento === 3){
    console.log(precoEtiqueta);
}else{
    console.log(AplicarJuros(precoEtiqueta, 10));
}


console.log(200 * 0.10);
console.log(10 / 100);