//Criar um programa que calcule média de notas
// recebendo duas notas em variáveis separadas

 
const alunosDaTurma1 = [
    {
        nome: 'João',
        nota: 7
    },
    {
        nome: 'Carlos',
        nota: 10
    },
    {
        nome: 'Mateus',
        nota: 5
    }
]
const alunosDaTurma2 = [
    {
        nome: 'Mariana',
        nota: 0
    },
    {
        nome: 'Julia',
        nota: 4
    },
    {
        nome: 'Catarina',
        nota: 8
    },
    {
        nome: 'Fulano',
        nota: 10
    },
    {
        nome: 'Roberta',
        nota: 10
    }
]
 
function calculoMedia(alunos){
    let soma = 0
   for (let index = 0; index < alunos.length; index++) {
       soma = soma + alunos[index].nota;
   }
   const media = soma / alunos.length;
   return (media);
    
}

const media1 = calculoMedia(alunosDaTurma1);
const media2 = calculoMedia(alunosDaTurma2);

function mensagem(media){
    if (media >= 5) {
        console.log(`Parabéns, pessoal! A média da turma é ${media}`);
    } else {
        console.log(`Se esforcem para melhorar, não desistam! A média da turma foi ${media}`);
    }
}

mensagem(media1);
mensagem(media2);