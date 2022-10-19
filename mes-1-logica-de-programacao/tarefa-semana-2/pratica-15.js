const imc = (peso, altura) => peso / (altura * altura)

function classificacaoImc(imc1) {
    if (imc1 < 18.5)
        return "Abaixo do Peso"
    if (imc1 < 25)
        return "Peso Normal"
    if (imc1 < 30)
        return "Sobrepeso"

    return "Obesidade"
}

function checagemImc(peso, altura) {
    const imc1 = imc(peso, altura)
    console.log(classificacaoImc(imc1))
}

checagemImc(50, 1.50)