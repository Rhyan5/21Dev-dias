//// REPETICAO DOWHILE
let continuar = false
let salario 
do{
let nome = prompt("Me fale seu nome:")
let idade = prompt("Qual sua idade?")
let salario = Number(prompt("Qual seu salário?"))
alert("Olá "+nome+", você tem "+idade+" anos e ganha R$"+salario+" por mês.")

let informacoes = prompt("Suas informações estão corretas? (s/n)")
if (informacoes == "s" || informacoes == "S") {
    continuar = false
} else {
    alert("Tente novamente")
    continuar = true
}
} while (continuar == true)

///// AUMENTO DE SALÁRIO
let aumento = 0.015
console.log("Previsão salarial dos próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2
    console.log((2025 + ano) + " = R$"+ salario)
}
