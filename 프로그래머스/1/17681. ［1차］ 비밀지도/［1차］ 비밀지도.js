function solution(n, arr1, arr2) {
    const binArr1 = arr1.map(e => e.toString(2).padStart(n, "0").split(""));
    const binArr2 = arr2.map(e => e.toString(2).padStart(n, "0").split(""));
    
    const newArr = [];
    
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(!!+binArr1[i][j] || !!+binArr2[i][j])
        }
        newArr.push(arr.reduce((acc, cur) => acc + (cur ? '#' : ' ') , ''))
    }
    return newArr
}