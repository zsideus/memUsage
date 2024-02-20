//objetos

class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é de ${this.idade} anos.`);
    }

    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    imc() {
        const indiceIMC = this.calcularIMC();
        console.log(`Meu IMC é ${indiceIMC.toFixed(2)}`);
    }
}

const joaoP = new Pessoa('João P Campos', 20, 1.77, 62);

joaoP.descrever();
joaoP.imc();
