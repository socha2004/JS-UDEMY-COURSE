// Uma função declarada como 'function' possui uma variável chamada 'arguments' que irá sustentar
// todos os argumentos enviados.
function soma() {
    let total = 0;
    for (let elemento of arguments) {
        total += elemento;
    }
    console.log(total);
}

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}

conta('+', 0, 5, 6, 7, 8, 9)