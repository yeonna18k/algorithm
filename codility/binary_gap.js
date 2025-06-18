function solution(N) {
    const bin = N.toString(2);
    const binArr = bin.split("1")
    
    if (binArr[binArr.length - 1].length > 0 ) binArr.pop()
    
    return binArr.reduce((acc, cur) => cur.length > acc ? cur.length : acc, 0 )
}
