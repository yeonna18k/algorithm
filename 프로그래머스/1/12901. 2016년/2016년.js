function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const weeks = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let days = 4
    if (a === 1) {
        days += b;
    } else {
        for (let i = 0; i < a - 1; i++) {
            days += month[i]
        }
        days += b;
    }
    return weeks[(days % 7)];
}