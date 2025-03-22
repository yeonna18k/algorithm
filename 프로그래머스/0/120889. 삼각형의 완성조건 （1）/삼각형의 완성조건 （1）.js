function solution(sides) {
    return Math.max(...sides) < sides.reduce((a, c) => a + c, 0) - Math.max(...sides) ? 1 : 2;
}