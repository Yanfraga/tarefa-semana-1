let calcularDesconto=function (valor,desconto){
    const valorFinal=valor*(1-desconto/100)
    return valorFinal
}
console.log(calcularDesconto(50,10))