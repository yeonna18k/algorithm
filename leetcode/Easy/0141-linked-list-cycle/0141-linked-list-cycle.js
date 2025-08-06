/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let current = head;

    while (current !== null)  {
        if (current.visited) {
            return true;
        }
        current.visited = true;
        current = current.next;

    } 
    return false;
};