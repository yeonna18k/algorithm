function solution(keymap, targets) {
    let result = [];
    for (item of targets) {
        let target = 0;
        for (let i = 0; i < item.length; i++) {
            let indexArr = [];
            for (const keys of keymap) {
                indexArr.push(keys.indexOf(item[i]) + 1)
            }
            const arr = indexArr.filter(e => e !== 0);
            if (arr.length > 0) {
                target += Math.min(...arr)    
            } else {
                target = -1
                break;
            }
        }
        result.push(target)
    }

    return result;
}