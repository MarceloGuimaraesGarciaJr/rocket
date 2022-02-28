// const e let são locais, e só funcionam no escopo onde são colocadas 

const x = 1

{
    const x = 0
    console.log("Existe x antes do bloco?",x)
   
}

console.log("Existe x aqui?",x)

//let e const só funcionan no escopo, dentro do {}
//fora isso só o var funciona.

