function solution(n, k) {
    let service = Math.floor(n / 10)
    let pay = n * 12000 + (k - service) * 2000
    return pay;
}