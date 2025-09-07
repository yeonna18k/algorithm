/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums2Set = new Set(nums2);
    const loop = Math.max(nums1.length, nums2.length);
    const set = new Set();

    for (let i = 0; i < loop; i++) {
        if (nums2Set.has(nums1[i])) {
            set.add(nums1[i])
        }
    }
    return [...set]
};