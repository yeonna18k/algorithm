/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const result = [];
    const sArr = nums1.length < nums2.length ? nums1 : nums2;
    const lArr = nums1.length < nums2.length ? nums2 : nums1;

    for (let i = 0; i < sArr.length; i++) {
        map.set(sArr[i], map.get(sArr[i]) + 1 || 0)
    }

    for (let i = 0; i < lArr.length; i++) {
        if (map.has(lArr[i])) {
            result.push(lArr[i])
            if (map.get(lArr[i]) > 0) {
                map.set(lArr[i], map.get(lArr[i]) - 1)
            } else {
                map.delete(lArr[i])
            }
        }
        if (map.size === 0) return result;
    }
    return result;
};