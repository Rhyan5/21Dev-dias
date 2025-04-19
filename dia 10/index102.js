let array = []
let arrayInvert = []


for (let i = 0; i<5 ; i++){
    let elemento = i + 1
    let numero = Number(prompt("Me fale o "+elemento+"° numero:"))
    array [i] = numero
}

console.log("Array original : " + array)

////INVERTENDO ARRAY
let contador = 4
for (let i = 0; i <5; i++){
    arrayInvert [i] = array [contador]
    contador--
} 

console.log("Array invertido : " + arrayInvert)