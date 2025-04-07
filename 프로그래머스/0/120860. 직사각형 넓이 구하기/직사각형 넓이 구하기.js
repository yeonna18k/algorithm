function solution(dots) {
    let arr = dots.sort().flat();
    return Math.abs((arr[6] - arr[0]) * (arr[7] - arr[1]));
}