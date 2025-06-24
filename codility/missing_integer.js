Try 01 (33%)

function solution(A) {
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

---

Try 02 (88%)

function solution(A) {
    let current = 1;
    A.sort((a, b) => a - b)

    if (A.at(-1) <= 0) return 1;

    if (A[0] > 1) return 1;

    for (let i = 0; i < A.length; i++) {
        if (current === A[i]) {
            continue;
        } else if (current + 1 === A[i]) {
            current++;
        } else if (current + 1 < A[i]) {
            break;
        }
    }
    return current + 1;
}

---

Try 03 (100%)

function solution(A) {
    let current = 0;
    A.sort((a, b) => a - b)

    if (A.at(-1) <= 0) return 1;

    if (A[0] > 1) return 1;

    for (let i = 0; i < A.length; i++) {
        if (current === A[i]) {
            continue;
        } else if (current + 1 === A[i]) {
            current++;
        } else if (current + 1 < A[i]) {
            break;
        }
    }
    return current + 1;
}
