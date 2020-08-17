//Calculador para aposentadoria

const nome = "Silvana";
const sexo = "3";
const idade = 48;
const contribuicao = 23;

   function aposentadoria(nome, sexo, idade, contribuicao){
       if (sexo === "F") {
           if (contribuicao >= 30) {
               if (contribuicao + idade >= 80) {
                   return(` ${nome}, você pode se aposentar!`)
               } else {
                   return(`${nome}, você ainda não pode se aposentar!`)
               }
           } else {
               return (`${nome}, você ainda não pode se aposentar!`)
           }
           
       } else if(sexo === "M") {
           if (contribuicao >= 35) {
               if (contribuicao + idade >= 95) {
                   return(` ${nome}, você pode se aposentar!`)
               } else {
                   return(`${nome}, você ainda não pode se aposentar!`)
               }
           } else {
               return (`${nome}, você ainda não pode se aposentar!`)
           }
       } else{
           return("Valores inválidos inseridos!")
       }
   }

let aposenta = aposentadoria(nome,sexo,idade,contribuicao);
console.log(aposenta);