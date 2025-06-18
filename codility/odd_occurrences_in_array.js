function solution(A) {
    const map = new Map();
    for (let i = 0; i < A.length; i++) {
        const pair = map.get(A[i]) || 0
        if (pair === 1) {
            map.delete(A[i])
        } else {
            map.set(A[i], pair + 1)    
        }
        
    }
    return [...map.keys()][0];
}
