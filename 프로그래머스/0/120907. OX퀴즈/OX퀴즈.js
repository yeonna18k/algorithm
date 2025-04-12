function solution(quiz) {
    return quiz.map(el => { 
        return el.split(" = ").map(n => {
            let num = n.split(" ");
             if (num.length > 1) {
                 if (num[1] === "-") return parseInt(num[0]) - parseInt(num[2]);
                 if (num[1] === "+") return parseInt(num[0]) + parseInt(num[2])
             }
            
        return Number(n)
        })
        
    }).map(an => an[0] === an[1] ? "O" : "X");
}

// function solution(quiz) {
//     return quiz.map(el => {
//         const [equation, result] = el.split(" = ");
//         const [n1, operator, n2] = equation.split(" ");
//         let calcResult = true;
//         if (operator === "+") {
//             calcResult = Number(n1) + Number(n2) === Number(result)
//         } else {
//             calcResult = Number(n1) - Number(n2) === Number(result)
//         }
//         return calcResult ? "O" : "X"
//     })
// }