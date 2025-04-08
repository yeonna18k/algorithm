function solution(score) {
    let score_arr = score.map(e => (e[0] + e[1]) / 2);
    let sorted = score.map(e => (e[0] + e[1]) / 2).sort((a, b) => b - a);
    let index_arr = [];
    for (let s of score_arr) {
        index_arr.push(sorted.indexOf(s) + 1);
    }
    return index_arr;
}