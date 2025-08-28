import { Soma,subtracao,divisao } from "./index.js";

console.log("Teste da função Soma()\n");

if (Soma(2, 2) === 4) console.log("Passou o primeiro!\n")
    else console.log("Falhou\n");


if(Soma(-1, 2) === 1) console.log("Passou no segundo!\n")
    else console.log("Falhou no segundo!\n");

if (Soma(2, 0) === 2) console.log("Passou no terceiro!\n")
    else console.log("Falhou no terceiro!\n");

console.log("Testando a função subtração()\n")

if (subtracao(1, 4) === -3){
    console.log("Passou no quarto\n")}
    else{console.log("não passou no quarto\n")}

if (subtracao(4, 4) === 0){
    console.log("Passou no quinto\n")}
    else{console.log("não passou no quinto\n")}

if (subtracao(1, -4) === 5){
    console.log("Passou no sexto\n")}
    else{console.log("não passou no sexto\n")};


console.log("Teste da função divisão\n")

if (divisao(10, 5) === 2){
    console.log("passou no setimo\n")
} else{
    console.log("não passou no sétimo\n")
}

if (divisao(4, 0) === undefined) console.log("Passou no oitavo");
    else{ console.log("falhou no oitavo")};
