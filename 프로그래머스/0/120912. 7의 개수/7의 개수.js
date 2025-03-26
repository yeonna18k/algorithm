// function solution(array) {
//     return array.toString().split("").filter(e => parseInt(e) === 7).length;
// }

function solution(array) {
    return array.join("").split(7).length - 1
}