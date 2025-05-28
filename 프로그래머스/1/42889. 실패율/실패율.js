function solution(N, stages) {
    let answer = [];
    for (let i = 1; i <= N; i++) {
        answer.push(stages.filter(e => e === i).length / stages.filter(e => e >= i).length);
    }
    
    let indexed = answer.map((rate, idx) => ({rate, index: idx + 1}));
    indexed.sort((a, b) => b.rate - a.rate || a.index - b.index)
 
    return indexed.map(item => item.index)
}