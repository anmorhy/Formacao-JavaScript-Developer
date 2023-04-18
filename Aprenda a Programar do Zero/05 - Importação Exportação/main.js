// const funcoes = require('./01_funcaoAuxiliar');
// console.log(funcoes);
// console.log(funcoes.gets());

// >codigos abaixo sao equivalentes
// const pessoa = {
//     nome: 'Ana',
// }
// >ou
// const { nome } = pessoa;
// >ou
// const nome = pessoa.nome;

//>pode ser chamado assim tambem
const {gets, print} = require('./01_funcaoAuxiliar');
print(gets());