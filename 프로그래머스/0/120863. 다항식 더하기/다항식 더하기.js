// function solution(polynomial) {
//     let co = 0;
//     let cons = 0;
//     for (let p of polynomial.split(" + ")) {
//         p.includes("x") ? co += (parseInt(p.replace("x", "")) || 1) : cons += parseInt(p)
//     }
//     if (co > 0) {
//         if (cons > 0) {
//             return co === 1 ? "x" + " + " + cons : co + "x" + " + " + cons;
//         } else {
//             return co === 1 ? "x" : co + "x";
//         }
//     }
//     return cons.toString();
// }

function solution(polynomial) {
    let polyarr = polynomial.split(" + ");
    
    let xNum = polyarr.filter(e => e.includes("x")).map(x => x.replace("x", "") || 1).reduce((cur, acc) => cur + parseInt(acc), 0);
    let consNum = polyarr.filter(e => !e.includes("x")).reduce((cur, acc) => cur + parseInt(acc), 0);
    
    let answer = [];
    
    xNum > 0 && answer.push(xNum > 1 ? xNum + "x" : "x")
    consNum > 0 && answer.push(consNum)
    
    return answer.join(" + ");
}