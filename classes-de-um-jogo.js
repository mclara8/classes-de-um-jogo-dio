// #3 Escrevendo as classes de um jogo 

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
       let ataque
       
       switch (this.tipo) {
        case "mago":
            ataque = "usou magia";
            break;
        case "guerreiro":
            ataque = "usou espada";
            break
        case "monge":
            ataque = "usou artes marciais";
            break
        case "ninja":
            ataque = "usou shuriken";
            break
        default:
            ataque = "use um ataque existente!";
       }

       console.log(`O ${this.tipo} atacou usando ` + ataque );
    
    }
}

const timeHerois = [
    new heroi("Gandalf", 24000, "mago"),
    new heroi("Buda", 35, "monge"),
    new heroi("Garen", 500, "guerreiro"),
    new heroi("Lee Sin", 38, "ninja")
];

for(const heroi of timeHerois){
    heroi.atacar();
}