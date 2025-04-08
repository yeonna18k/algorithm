function solution(n) {
    let hate = 0;
    while (n > 0) {
        hate++;
        while (hate % 3 === 0 || hate.toString().split("").includes("3"))  hate++
        n--;
    }
    return hate;
}