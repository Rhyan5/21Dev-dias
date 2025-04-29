let nomes = []
let senhas = []
let contador = 0

continuar = true

while (continuar){

let escolha = prompt("O que você deseja fazer:\n 1 - Cadastro\n 2 - Login\n 3 - Excluir\n 4 - Encerrar")

switch(escolha){
 
    case "1":
        nomes[contador] = prompt("Me fale o nome:")
        senhas[contador] = prompt("Me fale a senha:")
        contador++
        break;

    case "2":
        let nome = prompt("Qual seu nome?")
        let senha = prompt("Quals sua senha?")
        let logInvalido = false
        for( let i = 0; i < nomes.length; i++){
            if (nome == nomes[i] && senha == senhas [i]){
                logInvalido = true
            }
        }
        if (logInvalido)
            alert("Login feito com sucesso. Bem-Vindo!")
        else{
            alert("Usuário ou senha incorretos.")
        }
    case "3":
        let nomeExcluir = prompt("Qual nome deseja excluir?")
        let nomesAux = []
        let senhasAux = []
        let contAux = 0

    for (i=0; i<contador; i++){
        if(nomeExcluir == nomes[i]){
            alert("Cadastro excluído com sucesso.")
        }
        else{
            nomesAux[contAux] = nomes[i]
            senhasAux[contAux] = senhas[i]
            contAux++
        }
    }

    nomes = nomesAux
    senhas = senhasAux
    contador--

    break;

    case "4":
        alert("Você encerrou o programa")
        continuar = false
        break;
    default:
        alert("Opção inválida.")
        break;
}}