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
    let r1 = head, r2 = head;
    while (r1 && r1.next) {
        r1 = r1.next.next;
        r2 = r2.next;
        if (r1 == r2) {
            return true;
        }
    } 
    return false;
};
/*
https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1212/

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

*/
//Alternate solution
const hasCycle = (head) => {
    if(!head) return false;
    
    const nodeSet = new Set();
    let p1 = head;
    
    while(p1){
        if(nodeSet.has(p1)) return true;
        else nodeSet.add(p1);
        p1 = p1.next;
    }
    return false;
};

// O(N) time, O(1) lookup in the set, O(N) space for auxilliary set