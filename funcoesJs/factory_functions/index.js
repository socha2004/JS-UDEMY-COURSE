function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,

        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`;
        },
        // getter
        get imc(){
            const imc = this.peso / (this.altura ** 2);
            return `O IMC de ${this.nome} é: ${imc.toFixed(2)}`;
        },
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
            console.log(valor)
        }
    };
}

const p1 = criaPessoa("Eugenio", "Socha", 1.80, 70);
console.log(p1.fala("Futebol"));
p1.nomeCompleto = "Cesar Joao Filho"
console.log(p1.nomeCompleto);
// console.log(p1.imc);
// console.log(p1);