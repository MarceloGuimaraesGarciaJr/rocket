//block statement é uma declaração de bloco .
//um bloco vai criar um novo scopo block-scoper

{
    //issso é um bloco 
}

//  {
//      let x = 0
//      console.log (x)
// }

//var é global, e funciona fora de um escopo de bloco {}
console.log ('Existe x antes do bloco',x)
//aqui não vai mostrar por que o x está definido depois e o script joga para o topo porém, não definido
{
var x = 0 //global é tudo que está dentro da tag script, é tudo 
}

console.log ('Existe x depois do bloco',x)
//java script ordena por linha, ou seja, se a var estiver definida como var ele vai jogar para cima e dizer que está indefinida
//java script ordena por linha, ou seja, se a var estiver definida como var ele vai jogar para cima e dizer que está indefinida