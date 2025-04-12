///// 10.1
let array = []
let indices = []
let contIndice = 0
let Numprocurado = Number(prompt("Digite o número a ser procurado:"))

for (let i= -1; i < 10; i++){
    nval = i + 1
    let elemento = Number(prompt("Digite o elemento " + nval ))
    array [i]= elemento;}

for (let i=0; i<10; i++){
    if (array[i] === Numprocurado){
        indices[contIndice] = i
        contIndice++
    }
}

console.log("O numero "+Numprocurado+" foi encontrado nos índices: "+indices)
