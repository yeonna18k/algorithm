function solution(k, score) {
    let answer = [];
    let honor = [];
    for (item of score) {
        honor.push(item)
        honor.sort((a, b) => b - a)
        if (honor.length > k) honor.pop()        
        answer.push(Math.min(...honor))
    }
    return answer;
}