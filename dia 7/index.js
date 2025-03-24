let mdgeral = 0
let homens = 0
let mulheres7 = 0
let maiorhom = 0
let contador = 1
while(contador <= 4){
 let nota = parseInt(prompt("Me fale a nota do " + contador + "º aluno:"));
 let genero = prompt("Me fale o sexo do aluno: (m/f)");

    if (genero == "m"){
        if(nota > maiorhom) {
            maiorhom = nota
        }
        homens++
    }
    if (genero == "f" && nota > 7) {
        mulheres7++
    }
 mdgeral += nota
 contador++
}
Number(mdgeral = mdgeral/4)

console.log("A média geral dos alunos é " + mdgeral)
console.log("A quantidade de homens que enviaram notas foi "+ homens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi "+ mulheres7)
console.log("A maior nota entre os homens foi "+maiorhom)
