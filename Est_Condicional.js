/**
 * Menu De Opções
 */
function Cadastrar(){
    console.log("Cadastrar Funcionario")
}
function Alterar(){
    console.log("Alterar Funcionario")
}
function Excluir(){
    console.log("Excluir Funcionario")
}
function Consultar(){
    console.log("Consultar Funcionario")
}

console.log('-'.repeat(80))
console.log('-------- 1 - Executa a rotina de inclusão dos Funcionarios --------')
console.log('-------- 2 - Executa a rotina de alteracao dos Funcionarios --------')
console.log('-------- 3 - Executa a rotina de exclusao dos Funcionarios --------')
console.log('-------- 4 - Executa a rotina de consulta dos Funcionarios --------')
console.log('-'.repeat(80))
let opcao = 3
switch(opcao){
    case 1:
        Cadastrar();
        break;
    case 2:
        Alterar();
        break;
    case 3:
        Excluir();
        break;
    case 4:
        Alterar();
        break;
}
