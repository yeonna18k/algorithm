// function solution(numlist, n) {
//     return numlist.sort((a, b) => {
//              if (Math.abs(n - a) === Math.abs(n - b)) {
//         return b - a;
//     } else {
//         return Math.abs(n - a) - Math.abs(n - b);
//     };
//     }
//                        );
// }

function solution(numlist, n) {
    return numlist.sort((a, b) => (Math.abs(n - a) - Math.abs(n - b)) || b - a);
}