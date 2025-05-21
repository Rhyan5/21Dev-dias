let ArrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ArrayB = [1, 11, 23, 5, 6, 22, 7, 8, 344, 44];

let ArrayA1 = []
let ArrayB1 = []

function AcharNumerosEmComum(ArrayA1, ArrayB1) {
    let resultado = []
    let contadorResultado = 0

    for (let i = 0; i < ArrayA1.length; i++){

    for (let j = 0; j < ArrayB1.length; i++){

        if (ArrayA1[i] == ArrayB1[j]){
            resultado[contadorResultado] = ArrayA1[i]
            contadorResultado++
            j = ArrayB1.length

        }
    }
}

return resultado

}
console.log(AcharNumerosEmComum(ArrayA, ArrayB))

 

