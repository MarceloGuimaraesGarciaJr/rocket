/* Criar um algorítimo para transofrmar as notas do sistema numérico para caracteres tipo A B C 

* de 90 para cima = A 
* entre 80 - 89 = B 
* entre 70 - 79 = C 
* entre 60 - 69 = D 
* menores que 60 = F 

// */
// let score
// let scoreA = score >= 90 && score <= 100
// let scoreB = score >= 80 && score <= 89
// let scoreC = score >= 70 && score <= 79
// let scoreD = score >= 60 && score <= 69
// let scoreF = score >= 60 
// let scoreFinal;

  
//     if (scoreA) {
//         scoreFinal = 'A'
//    } else if (scoreB) {
//         scoreFinal = 'B'
//    } else if (scoreC){
//         scoreFinal = 'C'
//    } else if (scoreD){
//         scoreFinal = 'D'
//    } else if (scoreF)
//         scoreFinal = 'F'


// console.log(scoreFinal)



function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;


    if (scoreA) {
        scoreFinal = "A"
   } else if (scoreB) {
        scoreFinal = "B"
   } else if (scoreC) {
        scoreFinal = "C"
   } else if (scoreD) {
        scoreFinal = "D"
   } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(101))


console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(101))
