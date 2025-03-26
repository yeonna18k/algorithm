// function solution(array, n) {
//     array.sort((a, b) => a - b);
//     let abs = array.map(a => Math.abs(a - n));
//     return array[abs.indexOf(Math.min(...abs))];
// }

function solution(array, n) {
    array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b)
    return array[0]
}