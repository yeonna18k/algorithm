function solution(ingredient) {
    // 기존 O(n²)의 시간 복잡도: while 안에서 includes를 사용하고, includes로 비교한 문자열을 다시 replace를 이용하여 처음부터 비교하므로 중복 검사가 발생함
//     let wrapping = true;
//     const burger = "1231"
//     let str = ingredient.join("")
//     let count = 0;
    
//     while (wrapping) {
//         if (str.includes(burger)) {
//             str = str.replace(burger, "")
//             count++;
//         } else {
//         wrapping = false
//         }
//     }
    
    // O(n)의 시간복잡도. ingredient를 한 번 순회하면 끝이기 때문.
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i])
        
        if (stack.length > 3) {
            let burger = stack.slice(-4)
            if (burger.join("") === '1231') {
                stack.splice(-4)
                count++;
            }
        }
    }

    return count;
}