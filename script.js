function MelhorAluno() {
    var melhoraluno = "";
    var notamelhoraluno = 0;

    const texto = document.querySelector("h2");
    while (true) {
        var notas = prompt("Digite o nome do aluno/'end' para parar):");
        var notaluno = parseInt(prompt(`Digite a nota de ${notas}:`));


        if (notaluno > notamelhoraluno) {
            notamelhoraluno = notaluno;
            melhoraluno = notas;
            texto.innerHTML = (`Aluno com a maior nota: ${notas}`);
        } else if (notas.toLowerCase() === "end") {
            break;
        }



    }
    function musicas() {
        var n,
            x,
            max,
            i;

        const saida = document.querySelector('h1');


        i = 0;
        x = 0;
        max = 0;
        n = 0;

        n = prompt(" insira a quantidade de músicas")



        while (n >= 1) {
            x = prompt("quantas vezes cada musica foi tocada?");

            if (x > max) {
                max = x
            }

            n = n - 1;
        }

        alert(`${x}`)
    }
}