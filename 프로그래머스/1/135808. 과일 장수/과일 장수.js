function solution(k, m, score) {
    let result = 0;
    
    score.sort((a, b) => b - a)
    
    for (let i = 0; i < score.length / m; i ++) {
        let box = score.slice(i * m, (i + 1) * m)
        
        if (box.length === m) result += Math.min(...box) * m
    }
    return result;
}