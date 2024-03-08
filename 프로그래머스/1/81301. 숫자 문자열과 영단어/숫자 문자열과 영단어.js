// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     for (let i = 0; i < numbers.length; i++) {
//         if (s.includes(numbers[i])) {
//             s = s.replace(numbers[i], i);
//         }
//     }
//     return parseInt(s);
// }

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s;
    for (let i = 0; i < numbers.length; i++) {
            let arr = answer.split(numbers[i]);
            answer = arr.join(i);
    }
    return Number(answer);
}