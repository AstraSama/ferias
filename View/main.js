const prompt = require("prompt-sync")();
const fun = require("../Model/atividades.js");

let saida = 0;
let atividades = [];



do{
    let resposta = prompt("Digite 'add', 'find','q', 'rm', resposta: ").toLowerCase();

    switch (resposta) {
        case "add":
            atividades.push(fun.ADD());
            
            resposta = "";

        break;

        case "find":
            let look = prompt("Qual dia(dd/mm/yyyy): ");
            fun.LOOK(look, atividades);
            
            resposta = "";

        break;

        case "rm":
            let rm = prompt("Qual dia(dd/mm/yyyy): ");
            atividades = fun.RM(rm, atividades);

            console.log(atividades);

            resposta = "";

        break;

        case "q":
            saida = 1;

        break;

    }
} while(!saida);