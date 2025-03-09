let n1 = Number(prompt("Me fale um número:"))
let n2 = Number(prompt("Me fale outro número:"))
let opcao = prompt("Escolha uma operação matemática: \n 1 = + \n 2 = - \n 3 = * \n 4 = / ")
switch(opcao){
    case "1":
        console.log("O valor da adição é:", n1 + n2)
        break;
    case "2":
        console.log("O valor da subtração é:", n1 - n2)
        break;
    case "3":
        console.log("O valor da multiplicação é:", n1 + n2)
        break;
    case "4":
        console.log("O valor da divisão é:", n1 / n2)
        break;
    default:
        console.log("Opção inválida!")
        break;
}