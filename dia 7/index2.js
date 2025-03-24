let saldot = Number(6500)
let maiorv = Number(0)
let totaltran = 0
let media = Number(0)
let continuar = false
    do{
let nome = prompt("Me fale seu nome:")
let cpf = prompt("Me fale seu cpf:")
let transacao = (prompt("Me fale o valor da transação:"))
let opcao = prompt("Voce deseja sacar ou depositar? (s/d)")

    if (transacao <= 0){
        alert("Valor inválido, tente novamente.");}
    else if (opcao == "s" && transacao > saldot){
        alert("Você não possui saldo suficiente.");}
    else if (opcao == "s"){
        console.log("Olá "+nome+"seu saldo é de R$"+saldot+".");
        saldot -= transacao;
        totaltran++;
        media += transacao;
        if (transacao > maiorv){
            maiorv = transacao;}
            console.log("Transação realizada com sucesso, seu saldo é de R$"+saldot+".");}
    else {
            console.log("Olá "+nome+"seu saldo é de R$"+saldot+".");
            saldot += transacao
            totaltran++
            media += transacao;
            if (transacao > maiorv){
                maiorv = transacao;}
                console.log("Transação realizada com sucesso, seu saldo é de "+transacao+".")}
        
    let conti = prompt("Deseja continuar? (s/n)")
        if (opcao == "s"){
            continuar = true}
        else if (opcao == "n"){
            continuar = false
        }
        else {
            alert("Opcão inválida, tente novamente.")
        }
    } while(continuar == false)

console.log("Saldo final: R$"+saldot+".");
console.log("Maior valor inserido: R$"+maiorv+".")
console.log(parseInt(("Média de valores inseridos: R$"+media/totaltran+".")))


