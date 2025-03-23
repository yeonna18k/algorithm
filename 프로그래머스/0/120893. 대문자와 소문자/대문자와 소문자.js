function solution(my_string) {
    return my_string.split("").map(s => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()).join("");
}