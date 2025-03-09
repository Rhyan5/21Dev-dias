//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "s") {
    alert("Programa iniciado!!")
    let opcao = Number(prompt("Escolha uma ação a ser feita -> \n 1 - Mensagem motivacional; \n 2 - Mensagem desmotivacional; \n 3 - Nada"))
    switch (opcao) {
        case 1:
            alert("Continue tentando, você VAI conseguir!")
            break;
        case 2:
            alert("Você NÃO VAI conseguir, desista!")
            break;
        case 3:
            alert("....")
            break;
        default:
            alert("Opção inválida selecione um número de 1 a 3")
            break;
    }
} else {
    alert("Programa encerrado!")
    }