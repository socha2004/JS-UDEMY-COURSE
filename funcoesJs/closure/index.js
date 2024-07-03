function retornaFuncao() {
    const nome = "Eugenio";
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao)