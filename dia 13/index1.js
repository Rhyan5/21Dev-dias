class Computador {
    Tipo;
    Processador;
    Video;
    Armazenamento;
    MemoriaRam;
    SSD;
    constructor(tipo, processador, video, armazenamento, memoriaram, ssd) {
        this.Tipo = tipo;
        this.Processador = processador;
        this.Video = video;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaram;
        this.SSD = ssd;
    }

    ExibirInformacoes() {
        console.log("Informações do Computador:");
        console.log("Tipo: " + this.Tipo);
        console.log("Processador: " + this.Processador);
        console.log("Video: " + this.Video);
        console.log("Armazenamento: " + this.Armazenamento + "GB");
        console.log("Memoria Ram: " + this.MemoriaRam + "GB");
        console.log("SSD: " + this.SSD);
    }
}

let meuComputador = new Computador("Desktop", "Ryzen 5 5500", "RTX 3050", 512, 16, true);
meuComputador.ExibirInformacoes();