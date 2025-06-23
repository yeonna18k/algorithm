function solution(N, A) {
    const arr = new Array(N + 1).fill(0);

    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        const prev = arr[num]
        if (num <= N) {
            arr[num] = prev + 1
        } else {
            const max = Math.max(...arr)
            arr.fill(max);
        }
    } 

    return arr.slice(1);
}
