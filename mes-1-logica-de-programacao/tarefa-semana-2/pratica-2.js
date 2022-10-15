function nome(nomeDoComprador){
console.log(`Olá,${nomeDoComprador}!`)
}
function corpoEmail(nomeDoProduto,nomeDoRecebedor,endereçoEntrega){
    console.log(`Fizemos a entrega do produto ${nomeDoProduto} no endereço ${endereçoEntrega} com sucesso!`)
    console.log(`O seu produto foi recebido por: ${nomeDoRecebedor}`)
    console.log("Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.")

}

function finalEmail(nomeRemetenteEmail){
console.log(`Atenciosamente,
${nomeRemetenteEmail}`)
}

nome()
corpoEmail()
finalEmail()