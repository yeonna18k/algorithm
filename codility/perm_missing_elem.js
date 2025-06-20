function solution(A) {
    const rangeArr = [];

    for (let i = 1; i <= A.length + 1; i++) {
        rangeArr.push(i)
    }
    return rangeArr.reduce((acc, cur) => acc + cur, 0) - A.reduce((acc, cur) => acc + cur, 0);
}
