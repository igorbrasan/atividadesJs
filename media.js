//Criar um programa que calcule média de notas
// recebendo duas notas em variáveis separadas

const nome1 = 'Igor'
const notaAluno1 = 5.4

const nome2 = 'José'
const notaAluno2 = 1

const nome3 = 'Fulano'
const notaAluno3 = 7


const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;


if (media >= 5) {
    console.log(`Parabéns, pessoal! A média da turma é ${media}`);
} else {
    console.log(`Se esforcem para melhorar, não desistam! A média da turma foi ${media}`);
}

