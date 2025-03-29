///////CONHECENDO O USUÁRIO
let continuar = false

do{

let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let peso = Number(prompt("Qual seu peso"))
let altura = Number(prompt("Qual sua altura?"))
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
        console.log("O seu IMC é "+imc+"kg/m2, você está abaixo do peso.")
        break;
    case imc > 18.5 && imc <= 24.9:
        console.log("O seu IMC é "+imc+"kg/m2, o seu peso está normal.")
        break;
    case imc > 24.9 && imc < 30:
        console.log("O seu IMC é "+imc+"kg/m2, você está acima do peso.")
        break;
    case imc >= 30:
        console.log("O seu IMC é "+imc+"kg/m2, você está obeso")
        break;  
}

//// ANO NASCIMENTO
ano = 2025 - idade
console.log("Você nasceu no ano de "+ano+".")

///// ANOS VIVIVOS
anovivi = 2025 - idade
idadeAtual = 0
for (let i= anovivi; i <= 2025; i++){
    console.log("Nasceu em "+i+" e viveu " +idadeAtual+" anos.")
    idadeAtual++;
}

///// REPETIR O PROGRAMA
    let inserir = prompt("Deseja inserir novos dados? (s/n)")
    if (inserir == "s" || inserir == "S"){
        continuar = true}
    else{
        alert("Programa encerrado!")
        continuar = false}
    }   while( continuar == true) 

