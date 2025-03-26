// function solution(s) {
//     let arr = s.split(' ');
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "Z") {
//             sum += parseInt(arr[i - 1]) * -1
//         } else {
//             sum += parseInt(arr[i])
//         }
//     }
    
//     return sum;
// }

function solution(s) {
    let arr = []
    s.split(" ").forEach(number => {
        if (number === "Z") arr.pop()
        else arr.push(number)
    })
    return arr.reduce((cur, acc) => cur + parseInt(acc), 0)
}