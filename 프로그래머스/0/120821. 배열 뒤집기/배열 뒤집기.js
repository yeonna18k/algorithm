function solution(num_list) {
    let answer = [];
    const list_length = num_list.length;
    
    for (let i = 0; i < list_length; i++) {
        answer.push(num_list.pop());
    }
    return answer;
}