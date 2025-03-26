function solution(array, n) {
    array.sort((a, b) => a - b);
    let abs = array.map(a => Math.abs(a - n));
    return array[abs.indexOf(Math.min(...abs))];
}