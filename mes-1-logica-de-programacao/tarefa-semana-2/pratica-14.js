function imc (peso, altura){
    const imc1 = peso/(altura*altura)
    let classificacaoImc

    if(imc1 < 18.5){
        classificacaoImc = "Abaixo do Peso"
    }else if(imc1 < 25){
        classificacaoImc = "Peso Normal"
    }else if(imc1 < 30){
        classificacaoImc = "Sobrepeso"
    }else{
        classificacaoImc = "Obesidade"
    }
    return classificacaoImc
}
console.log(imc(73,1,78))