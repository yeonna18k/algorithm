function solution(arr1, arr2) {
    return arr1.map((e, i) => e.map((v, vi) => v + arr2[i][vi]));
}