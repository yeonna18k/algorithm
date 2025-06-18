function solution(A, K) {
    const rotate = A.length % K;
    const shifted = A.splice(-K)

    return shifted.concat(A);
}

---

function solution(A, K) {
    let rotate = K % A.length;

    if (rotate === 0) return A;

    while (rotate > 0) {
        const last = A.pop();
        A.splice(0, 0, last)
        rotate--;
    }

    return A;
}
