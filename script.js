function calcular() {
    // Obtendo o número de alunos do input
    const numAlunos = parseInt(document.getElementById("numAlunos").value);

    // Verificação simples para input inválido
    if (isNaN(numAlunos) || numAlunos <= 0) {
        alert("Por favor, insira um número válido de alunos.");
        return;
    }

    let mensalidadePorAluno = 0;
    let valorFixo = 0;

    // Determinando o valor por aluno
    if (numAlunos <= 100) {
        mensalidadePorAluno = numAlunos * 4.20;
    } else if (numAlunos <= 400) {
        mensalidadePorAluno = numAlunos * 2.20;
    } else if (numAlunos <= 1000) {
        mensalidadePorAluno = numAlunos * 1.60;
    } else {
        mensalidadePorAluno = numAlunos * 1.10;
    }

    // Determinando o valor fixo
    if (numAlunos <= 1000) {
        valorFixo = 990;
    } else {
        valorFixo = 1490;
    }

    // Atualizando os resultados na tela
    document.getElementById("mensalidadePorAluno").innerText = 
        `Mensalidade calculada por aluno: R$ ${mensalidadePorAluno.toFixed(2)}`;
    document.getElementById("valorFixo").innerText = 
        `Valor fixo para a escola: R$ ${valorFixo.toFixed(2)}`;
}
