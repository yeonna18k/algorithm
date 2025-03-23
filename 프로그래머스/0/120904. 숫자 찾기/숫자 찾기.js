function solution(num, k) {
    return num.toString().split("").indexOf(k.toString()) + 1 || -1;
}