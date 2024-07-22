const prompt = require("prompt-sync")();
let atividade = [];

const ADD = () => {
    let dia = prompt("Dia da atividade(dd/mm/yyyy): ");
    let horario = prompt("Horário da atividade(hh:mm): ");
    let nome = prompt("Nome da atividade: ");
    let descricao = prompt("Descrição da atividade: ");

    let aux = [];

    aux.push(dia);
    aux.push(horario);
    aux.push(nome);
    aux.push(descricao);

    atividade = aux;
    aux = [];
    return atividade;
}

const LOOK = (data, objeto) => {
    let aux = 0;

    for(let i = 0; i < objeto.length; i++) {
        for(let j = 0; j < 4; j++) {
            if(data == objeto[i][j]) {
                console.log(objeto[i]);
                aux = 1;

            }
        }
    }

    if(!aux) {
        console.log("\nNão há");

    }
}

const RM = (data, objeto) => {
    let aux = 0;

    if(objeto.length > 1) {
        for(let i = 0; i < objeto.length; i++) {
            if(data == objeto[i][0]) {
                objeto.splice(i,1);
                aux = 1;
                console.log("removido");

            }
        }
    } else {
        if(data == objeto[0][0]) {
            objeto.splice(0, 1);
            aux = 1;
            console.log("removido");

        }
    }

    if(!aux) {
        console.log("\nNão há");

    }

    return objeto;
    
}

module.exports = {
    ADD,
    LOOK,
    RM
}