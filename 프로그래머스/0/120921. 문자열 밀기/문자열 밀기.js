function solution(A, B) {
    let arr = A.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr.join("") === B) return i;
        arr.unshift(arr.pop())
    }
    return -1;
}