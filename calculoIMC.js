    
 /*calcule o imc de uma pessoa com os dados abaixo */
    const nome = "José";
    const peso = 120;
    const altura = 1.92;
    

function calculoIMC(nome, peso, altura){
    let imc = (peso/(altura*altura));

    if (imc>=30) {
        return( `${nome} você está acima do peso.`)
    } else {
        return(`${nome} você não está acima do peso.`)
    }
}

 let calc = calculoIMC(nome, peso, altura);

 console.log( calc);
