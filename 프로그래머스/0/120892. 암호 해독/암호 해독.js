function solution(cipher, code) {
    let arr = []
    for (let i=1; i <= cipher.length/code; i++) {
        arr.push(cipher[code * i - 1])
    }
    return arr.join("");
}