function solution(a, b) {
    return a.map((e, i) => e * b[i]).reduce((p, c) => p + c);
}