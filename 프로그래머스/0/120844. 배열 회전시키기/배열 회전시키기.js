function solution(numbers, direction) {
    let answer = numbers;
    let num = direction === "left" ? answer.shift() : answer.pop()
    direction === "left" ? answer.push(num) : answer.unshift(num)
    return answer;
}