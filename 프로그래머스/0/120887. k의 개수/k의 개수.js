function solution(i, j, k) {
    let answer = 0;
    for (let h = i; h <= j; h++) {
        let num_arr = h.toString().split("")
        let count = num_arr.filter(n => parseInt(n) === k).length
        answer += count
    }
    return answer;
}