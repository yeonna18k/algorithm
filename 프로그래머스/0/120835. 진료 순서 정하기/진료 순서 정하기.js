function solution(emergency) {
    const emergency_sort = [...emergency]
    emergency_sort.sort((a, b) => b - a);
    return emergency.map(e => emergency_sort.indexOf(e) + 1);
}