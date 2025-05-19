class Carro{
    Nome;
    Potencia;
    VelocidadeMaxima;
    Aceleraçao;

    constructor(nome, potencia, velocidademaxima, aceleraçao){
        this.Nome = nome;
        this.Potencia = potencia;
        this.VelocidadeMaxima = velocidademaxima;
        this.Aceleraçao = aceleraçao;}


CalcularTempoMedio(distancia){
    let resultado = distancia  (this.VelocidadeMaxima / this.Aceleraçao);
    return resultado
    }}

class Corrida{
    Nome;
    Tipo;
    Distancia;
    Vencedor;
    Participantes;
    
Constructor(nome, tipo, distancia){
    this.Nome = nome;
    this.Tipo = tipo;
    this.Distancia = distancia;
    this.Vencedor = "";
    this.Participantes = [];
}

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio((this.Distancia));
        let vencedor = this.Participantes[0];

        for(let i = 1; i < this.Participantes.length; i++){
            let tempoAtual = this.Participantes[i].CalcularTempoMedio((this.Distancia));
            if(tempoAtual < menorTempo){
                menorTempo = tempoAtual;
                vencedor = this.Participantes[i];
            }
        }
        
        

     return this.Vencedor = vencedor;
    }
    ExibirVencedor(){
        alert("O vencedor da corrida " + this.Nome + " é: " + this.Vencedor.Nome);}
    }

    let corrida = new Corrida("Monza", "Formula 1", 50000)

    corrida.Participantes[0] = new Carro ("Opala", 210, 200, 150)
    corrida.Participantes[1] = new Carro ("Fiat Uno", 160, 180, 120)
    corrida.Participantes[2] = new Carro ("Fusca", 120, 160, 100)

    corrida.DefinirVencedor();
    corrida.ExibirVencedor();