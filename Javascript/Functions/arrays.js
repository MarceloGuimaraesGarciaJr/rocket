// /* converter as strings em numeros utilizando o Number e Number em String utilizandoo String*/

// let string = "123"
// console.log(Number(string))

// let number = 321

// console.log(String(number))

// let word = "Paralelepipedo"

// console.log(word.length) /*contar caracteres*/

// console.log(String(number).length) /*Encapsula o numero convertendo em string e conta caracteres.*/


// let number = 123412341234.1234123412341234

// console.log(number.toFixed(2).replace(".", ","))  transformando casas decimais em 2 e convertendo . para ,

// let word = "Programar é muito bacana"

// console.log(word.toLowerCase().toUpperCase()) Maíuscula minúscula 

//////////////////
// let phrase = "Eu quero água"
// let Array  = phrase.split(" ") // splita no array separado pelo espaço
// let phraseWithUnderscore = Array.join(" ") //junta com underlines

// console.log(Array) 
// console.log(phraseWithUnderscore)

/////////////////////

// let phrase = "Eu quero viver"
// console.log(phrase.includes("quero"))
// console.log(phrase.includes("Quero")) /* inlcudes procura dentro do string para ver se existe a palavra. ele é case sensitive. 

///////////////

// let myArray = ['a','b','c']
// console.log(myArray)

// /*agora vamos criar com o construtor*/

// let consArray = new Array('a', 'b', 'c')
// console.log(consArray)

/////////////

// console.log(['a','b','c'])

// console.log(['a', {type:"array"},
//     function(){
//         return "Alou"
//     },

// ].length)

// let word = "Manipulação"

// console.log(Array.from(word))  /* cria uma array com cada uma das letras 



//Manipulando arrays 

let techs = ["html", "css", "js"]

//adicionar itens no fim

// console.log(techs.push("node.js"))


//adicionar no começo
//techs.unshift("sql")

//remover do fim

//techs.pop() //pop remove do final

//remover do começo 
//techs.shift()

//pegar somente uma parte 
// console.log(techs.slice(0, 1 ))
//remove 1 ou mais itens de qualquer posição do array
//techs.splice(1, 2) /*diz a posição e retira*/


// let index = techs.indexOf("css")
// techs.splice(index, 1)
// console.log(index)

// console.log(techs)