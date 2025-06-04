function solution(ingredient) {
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