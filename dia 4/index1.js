let fome = prompt("Você está com fome?")
let dinheiro = prompt("Você tem dinheiro?")
let restaurante = prompt("O restaurante está aberto?")
    if (fome === "nao" || dinheiro === "nao"){
        console.log("Hoje o jantar será em casa!");
    }
    else if (fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
        console.log("Peça um delivery!!");
    }
    else if (fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
        console.log("Hoje o jantar será no seu restaurante preferido");
    }
