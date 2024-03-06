function solution(n, m) {
    var answer = [];
    let min = 0;
    for (let i = 0; i < Math.max(n, m); i++) {
        if (n % i === 0 && m % i === 0) min = i;
    }
    answer.push(min);
    answer.push(n * m / min);
    return answer;
}