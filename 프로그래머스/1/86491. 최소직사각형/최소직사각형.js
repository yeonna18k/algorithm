function solution(sizes) {
    var answer = 0;
    return Math.max(...sizes.map(e => Math.max(...e)))
    * Math.max(...sizes.map(e => Math.min(...e)));
}