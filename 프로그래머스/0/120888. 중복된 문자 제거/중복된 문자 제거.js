function solution(my_string) {
    let arr = [];
    for (let i=0; i < my_string.length; i++) {
        if (!arr.includes(my_string[i])) arr.push(my_string[i])
    }
    return arr.join("");
}