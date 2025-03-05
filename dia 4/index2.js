let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let cart = prompt("Você possui carteira de motorista?")
let car = prompt("Você possui carro?")
    if (idade <18 || cart === "nao"){
        console.log( nome + " você não pode dirigir.");
    }
    else if (idade >= 18 && cart === "sim" && car === "nao"){
        console.log( nome + " você pode dirigir, mas não possui um carro.");
    }
    else if (idade >= 19 && cart === "sim" && car === "sim"){
        console.log( nome + ", você será o motorista!");
    }
