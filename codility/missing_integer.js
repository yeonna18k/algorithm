unction solution(A) {
    let min = 1;
    A.sort((a, b) => a - b)

    if (A.at(-1) <= 0) return min;

    for (let i = 0; i < A.length; i++) {
        if (min + 1 === A[i]) {
            min++;
        } else if (min === A[i]) {
            continue;
        } else {
            break;
        }
    }
    return min + 1;
}
