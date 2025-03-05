


let nome = prompt("Me fale seu nome:")
console.log("Me fale seu nome:")
console.log(nome)
let idade = prompt("Me fale sua idade:")
let idadeInt = Number(idade)
console.log("Me fale sua idade:")
console.log(idadeInt)
let altura = prompt("Me fale sua altura:")
let alturaNum = Number(altura)
console.log("Me fale sua altura:")
console.log(alturaNum)
let peso = prompt("Me fale seu peso:")
let pesoNum = Number(peso)
console.log("Me fale seu peso:")
console.log(pesoNum)
let anoNasc = 0
anoNasc = 2025 - idadeInt
let imc = 0
imc = parseInt(pesoNum / (alturaNum * alturaNum))
console.log("Olá " + nome + ", você tem " + idadeInt  + " anos, nasceu em " + anoNasc + ", tem " + alturaNum + " de altura, pesa " + pesoNum + "kg e seu IMC é de " + imc +"Kg/m2")