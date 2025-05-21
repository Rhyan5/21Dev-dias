let nome  
let salario

function perguntacolaborador(){
    nome = prompt("Qual o seu nome? ")
    salario = parseFloat(prompt("Qual o seu salário? "))
    
    calcularaumento(nome, salario)
}

function calcularaumento(nome, salario){
    let aumento = 0
    if (salario <= 1500){
        aumento = 0.2}

    else if (salario > 1500 && salario <= 2000){
        aumento =  0.15}

    else if (salario > 2000 && salario <= 3000){
        aumento = 0.1}
    
    else {
        aumento = 0.05}

    let novoSalario = (salario + salario * aumento)

    console.log("Nome do colaborador: " + nome)
    console.log("Salário atual: " + salario)
    console.log("% de aumento: " + (aumento * 100) + "%")
    console.log("Novo salário: " + novoSalario)

    calcularnovamente()
    }
function calcularnovamente(){
    let resposta = prompt("Deseja calcular novamente? (s/n) ")
    if (resposta == "s"){
        perguntacolaborador()
    }
    else{
        alert("Obrigado por usar o sistema de cálculo de aumento salarial!")
     }
    }
