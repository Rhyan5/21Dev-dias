///////CONHECENDO O USUÁRIO

let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let peso = prompt("Qual seu peso")
let altura = prompt("Qual sua altura?")
let profissao = prompt("Qual sua profissão?")

console.log("Seu nome é "+nome+", tem "+idade+" anos, "+peso+"kg, tem "+altura+" de altura e é "+profissao+".")

if (idade >= 18) {
    console.log("Está liberado para tomar uma gelada hoje")
}
else {
    console.log("Sem gelada para você")
}

meses = idade * 12;
semanas= idade * 53;
dias = idade * 365;

console.log("Você já viveu "+meses+" meses, "+semanas+" semanas e "+dias+" dias.")

//////// FAZENDO IMC
imc = peso / (altura * altura)
switch (imc){
    case imc <= 18.5:
        console.log("Você está abaixo do peso.")
        break;
    case imc > 18.5 && imc <= 24.9:
        console.log("O seu peso está normal.")
        break;
    case imc > 24.9 && imc < 30:
        console.log("Você está acima do peso.")
        break;
    case imc >= 30:
        console.log("Você está obeso")
        break;  
}

