function solution(numbers, hand) {
    let result = '';
    let curL = [3, 0];
    let curR = [3, 2];
    
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    function getDistance(num1, num2) {
        return Math.abs(num1[0] - num2[0]) + Math.abs(num1[1] - num2[1])   
        // return 0;
    }
    
        
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        let target = keypad[num]
        
        
        if (num === 1 || num === 4 || num === 7) {
            result += "L"
            curL = target
            console.log(i, "curL", curL)
        } else if (num === 3 || num === 6 || num === 9) {
            result += "R"
            curR = target
        } else {
            const leftDist = getDistance(target, curL)
            const rightDist = getDistance(target, curR)
            
            if (leftDist > rightDist) {
                result += "R"
                curR = target
            } else if (leftDist < rightDist) {
                result += "L"
                curL = target
            } else {
                if (hand === "right") {
                    result += "R"
                    curR = target
                } else {
                    result += "L"
                    curL = target
                }
            }
            
        }
    }
    return result;
}