function solution(food) {
    const fight = food.map((item, idx) => (idx).toString().repeat(Math.floor(item / 2)));
    const string = fight.join("") + "0" + fight.reverse().join("")
    return string;
}