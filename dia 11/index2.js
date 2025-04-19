let modelos = []
let anos = []
let valores = []
let cadastro = true
let contador = 0
while (cadastro){
    let nome = prompt("Digite o modelo do carro:")
    let ano = Number(prompt("Digite o ano do carro:"))
    let valor = Number(prompt("Digite o valor do carro:"))
    modelos[contador] = nome
    anos[contador] = ano
    valores[contador] = valor
    contador++
    let resposta = prompt("Deseja cadastrar outro carro? (s/n)")
    if (resposta == "n"){
        cadastro = false
}}

for (let i = 0; i < contador; i++){
    console.log("Modelo: "+modelos+ "\n Ano: "+ anos +"\n Valores: "+valores)}

