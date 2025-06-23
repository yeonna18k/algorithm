Try 01 (77%)

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

---

Try 02 (100%)

function solution(N, A) {
    const arr = new Array(N + 1).fill(0);
    let max = 0;
    let baseValue = 0;

    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        if (num <= N) {
            if (arr[num] < baseValue) arr[num] = baseValue;
            arr[num]++;
            if (arr[num] > max) max = arr[num];
        } else {
            baseValue = max
        }
    } 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < baseValue) arr[i] = baseValue;
    }

    return arr.slice(1);
}
