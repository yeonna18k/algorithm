Try 01 (55%)

function solution(X, Y, D) {
    let current = X;
    let jump = 0;

    while (current < Y) {
        current += D
        jump++;
    }
    return jump;
}

Try 02
