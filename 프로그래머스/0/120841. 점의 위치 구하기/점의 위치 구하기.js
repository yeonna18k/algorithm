function solution(dot) {
    const [dotx, doty] = dot;
    const multiple = dotx * doty;
    return multiple > 0 ? (dotx > 0 ? 1 : 3) : (dotx > 0 ? 4 : 2);
}