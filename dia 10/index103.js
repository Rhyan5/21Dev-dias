let array = []
let arrayInvert = []
let quant = Number(prompt("Quantos numeros deseja inserir no array?"))
for (let i = 0; i< quant; i++){
    ordem = i + 1
    let num = Number(prompt("Insira o "+ordem+"° numero:"))
    array[i] = num
}
console.log ("Array original: " + array)

///// ARRAY INVERTIDO
contador = quant - 1
for (let i = 0; i < quant ; i ++){
    arrayInvert[i] = array[contador]
    contador--

}
console.log( "Array invertido: " + arrayInvert)