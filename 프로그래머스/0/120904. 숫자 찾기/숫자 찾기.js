function solution(num, k) {
    let index = num.toString().split("").indexOf(k.toString());
    return index > -1 ? index + 1 : index;
}