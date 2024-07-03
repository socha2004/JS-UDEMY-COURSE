// exemplo de closure
function criaMultiplicador(multiplicador){
    return function(numero) {
        return numero * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quatriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));