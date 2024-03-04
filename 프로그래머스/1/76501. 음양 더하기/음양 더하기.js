function solution(absolutes, signs) {
    let arr = absolutes.map((e, i) => signs[i] ? e : -e);
    return arr.reduce((p, c) => p + c);
}