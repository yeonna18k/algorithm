function solution(name, yearning, photo) {
    const arr = [];
    for (item of photo) {
        let sum = 0;
        for (let i = 0; i < item.length; i++) {
            if (name.indexOf(item[i]) >= 0) sum += yearning[name.indexOf(item[i])]
        }
        arr.push(sum);
    }
    return arr;
}