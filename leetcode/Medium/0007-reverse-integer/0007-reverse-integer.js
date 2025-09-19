/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let reversed = 0;
    let temp = x;

    while (temp !== 0) {
        let digit = temp % 10;
        
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && digit > 7)) {
            return 0;
        }
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && digit < -8)) {
            return 0;
        }
        
        reversed = reversed * 10 + digit;
        
        if (temp > 0) {
            temp = Math.floor(temp / 10);
        } else {
            temp = Math.ceil(temp / 10);
        }
    }

    return reversed;
};