function solution(num, total) {
    const mid = Math.floor(total / num)
    const first = mid - Math.floor(num / 2) + (num + 1) % 2
    return new Array(num).fill(0).map((_, i) => i + first);
}