// function solution(score) {
//     let score_arr = score.map(e => (e[0] + e[1]) / 2);
//     let sorted = score.map(e => (e[0] + e[1]) / 2).sort((a, b) => b - a);
//     return score_arr.map(e => sorted.indexOf(e) + 1);
// }

function solution(score) {
    return score.map(e => {
        return score.filter(s => (s[0] + s[1]) / 2 > (e[0] + e[1]) / 2).length + 1
    })
}