function maiorValor (numero1,numero2,numero3){
    if(numero1>numero2 && numero1>numero3){
        console.log(numero1)
    }if(numero2>numero1 && numero2>numero3){
        console.log(numero2)
    }if(numero3>numero1 && numero3>numero2){
        console.log(numero3)
    }else{
        console.log(numero1)
    }
}
maiorValor(80,80,80)