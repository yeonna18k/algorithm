function solution(numbers) {
    let eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < eng.length; i++) {
        numbers = numbers.split(eng[i]).join(i);
    } 
    return parseInt(numbers);
}