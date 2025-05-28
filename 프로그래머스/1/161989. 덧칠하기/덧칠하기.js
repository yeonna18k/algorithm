function solution(n, m, section) {
    let result = 0;
    let index = 0;
    for (let i = 0; i < section.length; i++) {
        if (section[i] > index) {
            index = section[i] + m - 1;
            result++;
        }
    }
    return result;
}