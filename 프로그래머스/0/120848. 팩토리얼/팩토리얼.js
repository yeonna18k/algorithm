function solution(n) {
    
    function factorial(j) {
        return j === 1 ? 1 : j * factorial(j-1);
    }
    
    for (let i = 1; i <= n; i++) {
        if (factorial(i) >= n) return factorial(i) === n ? i : i - 1;
    }
}