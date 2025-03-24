function solution(numbers, direction) {
    let answer = numbers;
    direction === "left" ? answer.push(answer.shift()) : answer.unshift(answer.pop())
    return answer;
}