Try 01 (48%)

function solution(A) {
    const sum = A.reduce((acc, cur) => acc + cur, 0)
    let min = sum;
    let firstPart = 0;

    for (let i = 0; i < A.length; i++) {
        firstPart += A[i];
        const diff = Math.abs(sum - (firstPart * 2))
        if (diff < min) {
            min = diff
        }
    }

    return min;
}


Try 02 (100%)

function solution(A) {
    let firstPart = A[0];
    let secondPart = A.reduce((acc, cur) => acc + cur, 0) - A[0]
    let min = Math.abs(firstPart - secondPart)

    for (let i = 1; i < A.length - 1; i++) {
        firstPart += A[i]
        secondPart -= A[i]

        const diff = Math.abs(firstPart - secondPart);
        if (diff < min) {
            min = diff
        }
    }

    return min;
}
