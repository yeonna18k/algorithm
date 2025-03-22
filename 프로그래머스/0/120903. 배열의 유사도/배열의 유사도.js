function solution(s1, s2) {
    return s1.filter(s => s2.findIndex(ss => ss === s) >= 0).length;
}