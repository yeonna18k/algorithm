Try 01 (41%)

function solution(A) {
    const max = Math.max(...A)
    const min = Math.min(...A)

    const arr = [];

    for (let i = min; i <= max; i++) arr.push(i)

    if (arr.length === A.length) return 1;

    return 0;
}

---

Try 02 (100%)

function solution(A) {
    const arr = new Array(A.length).fill(false);

    A.forEach(v => arr[v-1] = true);
    return arr.some(v => !v) ? 0 : 1;
}
