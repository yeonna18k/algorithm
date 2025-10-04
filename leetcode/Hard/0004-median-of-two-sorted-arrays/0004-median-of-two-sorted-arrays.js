/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     let m = nums1.length;
    let n = nums2.length;

    if (m > n) {
        [nums1, nums2, m, n] = [nums2, nums1, n, m];
    }

    let low = 0;
    let high = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (low <= high) {
        let i = Math.floor((low + high) / 2);
        let j = halfLen - i;

        let nums1_left_max = i === 0 ? -Infinity : nums1[i - 1];
        let nums1_right_min = i === m ? Infinity : nums1[i];

        let nums2_left_max = j === 0 ? -Infinity : nums2[j - 1];
        let nums2_right_min = j === n ? Infinity : nums2[j];

        if (nums1_left_max <= nums2_right_min && nums2_left_max <= nums1_right_min) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1_left_max, nums2_left_max);
            } else {
                return (Math.max(nums1_left_max, nums2_left_max) + Math.min(nums1_right_min, nums2_right_min)) / 2.0;
            }
        } else if (nums1_left_max > nums2_right_min) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
};