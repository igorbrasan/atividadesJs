const alunosDaTurma1 = [
    {
        nome: 'João',
        nota: 10,
    },
    {
        nome: 'Carlos',
        nota: 10,
    },
    {
        nome: 'Mateus',
        nota: 3,


    },
]
const alunosDaTurma2 = [
    {
        nome: 'Mariana',
        nota: 0,
    },
    {
        nome: 'Julia',
        nota: 0,
    },
    {
        nome: 'Catarina',
        nota: 0,
    },
    {
        nome: 'Fulano',
        nota: 10,
    },
    {
        nome: 'Roberta',
        nota: 10,
    },
]

function calculoMedia(alunos) {
    let soma = 0
    for (let index = 0; index < alunos.length; index++) {
        soma = soma + alunos[index].nota;
    }
    const media = soma / alunos.length;
    return (media);

}

function mensagemDaMedia(turma) {
    let media = calculoMedia(turma);
    if (media >= 5) {
        console.log(`Parabéns, pessoal! A média da turma é ${media}`);
    } else {
        console.log(`Se esforcem para melhorar, não desistam! A média da turma foi ${media}`);
    }
}

function reprovar(aluno) {

    aluno.reprovado = (aluno.nota < 5);
}


function mostrarReprovacao(aluno) {

    if (aluno.reprovado) {

        console.log(`O ${aluno.nome} está reprovado!`);
    } else {
        console.log(`O ${aluno.nome} está aprovado!`);
    }
}

function enviaMensagem(alunos) {

    for (let aluno of alunos) {

        reprovar(aluno);
        mostrarReprovacao(aluno);
    }
}


mensagemDaMedia(alunosDaTurma1);

mensagemDaMedia(alunosDaTurma2);

enviaMensagem(alunosDaTurma1);

enviaMensagem(alunosDaTurma2);
