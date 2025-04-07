function solution(spell, dic) {
    for (s in spell) {
        dic = dic.filter(e => e.includes(spell[s]))
    }
    return dic.length > 0 ? 1 : 2;
}