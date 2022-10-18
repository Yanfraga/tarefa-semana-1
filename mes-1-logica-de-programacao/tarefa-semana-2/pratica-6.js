let calcularDesconto = (valor,desconto)=>{
    const valorFinal=valor*(1-desconto/100)
    return valorFinal
}
console.log(calcularDesconto(100,20))