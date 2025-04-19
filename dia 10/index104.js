let numero = Number(prompt("Escreva um numero inteiro positivo:"))
let fibonacci = []
fibonacci [0] = numero - 1
fibonacci [1] = numero
for (let i = 2; i < 10; i++ ){
    fibonacci [i] = fibonacci [i - 1] + fibonacci [i - 2]
}

console.log("Fibonacci :" + fibonacci)