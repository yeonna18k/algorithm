function solution(order) {
    return order.toString().split("").filter(o => parseInt(o) !== 0 && parseInt(o) % 3 === 0).length;
}