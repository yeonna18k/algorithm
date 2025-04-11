function solution(polynomial) {
    let co = 0;
    let cons = 0;
    for (let p of polynomial.split(" + ")) {
        p.includes("x") ? co += (parseInt(p.replace("x", "")) || 1) : cons += parseInt(p)
    }
    if (co > 0) {
        if (cons > 0) {
            return co === 1 ? "x" + " + " + cons : co + "x" + " + " + cons;
        } else {
            return co === 1 ? "x" : co + "x";
        }
    }
    return cons.toString();
}