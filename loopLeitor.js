/* 
Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:
*/
const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

/* Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js

*/
/*
function recolheInformação(usuarios){
    for(let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
    }
}
recolheInformação(usuarios);

*/

function checaSeUsuarioUsaCSS(usuario) {
    let resposta = "a";
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let j = 0; j < usuario.tecnologias.length; j++){
        if( usuario.tecnologias[j] === "CSS"){
            resposta = true;
        }else{
            resposta = false;

        }
    }
    return resposta;
  }

  for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }