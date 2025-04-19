let alunos = []
let notas = []
let media = Number(0)
let soma =Number(0)
let contador = 0
let continuar = true
while(continuar){
    let nome = prompt ("Digite o nome do aluno:")
    alunos[contador] = nome
    let nota = Number(prompt("Digite a nota do aluno:"))
    notas[contador] = nota
    contador++
    let inserir = prompt("Deseja inserir mais um aluno? (s/n)")
    if (inserir == "n"){
        continuar = false}
}
console.log("Nota dos alunos: ")
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]+ ": " +notas[i])
}
for (let i = 0; i < notas.length; i++) {
soma += notas[i]
}
media = soma / alunos.length
console.log("A soma das notas foi: " + soma)
console.log("A média geral da turma foi: " +media)