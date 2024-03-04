function solution(arr, divisor) {
    let answer = [];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    answer.length ===0 ? answer = [-1] : answer = answer.sort((a,b) => a - b);
    return answer;
}