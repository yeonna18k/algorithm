// function solution(s) {
//     return s.split("").map(s => 
//                            s.split("").map((e, i) => 
//                            {return i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()}).join("").join(""));
// }

function solution(s) {
    return s.split(" ").map(word => word.split("")).map((part) => part.map((e, i) => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join("")).join(" ");
}