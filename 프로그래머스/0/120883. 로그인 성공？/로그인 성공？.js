function solution(id_pw, db) {
    for (let user of db) {
        if (id_pw[0] === user[0]) return id_pw[1] === user[1] ? "login" : "wrong pw";
    }
    return "fail";
}