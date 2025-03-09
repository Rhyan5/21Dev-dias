let posto = Number(prompt("Você deseja: \n 1 = Abastecer com gasolina \n 2 = Abastecer com álcool \n 3 = Calibrar os pneus"))
let valor
switch(posto){
    case 1:
        valor = Number(prompt("Qual valor desejado?"))
        console.log("Você abasteceu " + valor / 5 +" litros de gasolina com R$ " + valor +".")
        break;
    case 2:
        valor = Number(prompt("Qual valor desejado"))
        console.log("Você abasteceu " + valor / 3 +" litros de álcool com R$ " + valor + ".")
        break;
    case 3: 
        console.log("Pneus calibrados com sucesso!")
        break; 
}
