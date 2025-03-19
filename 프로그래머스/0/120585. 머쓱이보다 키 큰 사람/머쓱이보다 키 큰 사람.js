function solution(array, height) {
    return array.filter(m => m > height).length;
}