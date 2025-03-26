// function solution(s) {
//     let sort = [...s].sort();
//     let news = ""
//     for (let i = 0; i < sort.length; i++) {
//         if (sort.filter(e => e === sort[i]).length === 1) news += sort[i]
//     }
//     return news;
// }

function solution(s) {
    let news = []
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) news.push(c)
    return news.sort().join("");
}