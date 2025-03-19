function solution(my_string) {
    return [...my_string].filter(s => ["a", "e", "i", "o", "u"].indexOf(s) < 0).join("");
}