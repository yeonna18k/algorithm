function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        return common.pop() + common[1] - common[0];
    } else if (common[2] / common[1] === common[1] / common[0]) {
        return common.pop() * common[1] / common[0];
    }
}