function solution(n) {
    var answer = 0;
    return n.toString().split("").map(e => Number(e)).reduce((a,c) => a + c, 0);
}