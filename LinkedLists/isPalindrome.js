/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let curr = head;
    const traverse = node => {
        if (node === null) {
            return true;
        }
        // traverse to the end of the list first
        const prevIsSame = traverse(node.next);
        // when the call stack bounces back, compare the values 
        // from the head and from the bottom up
        const currIsSame = curr.val === node.val;
        curr = curr.next;
        return prevIsSame && currIsSame;
    }
    return traverse(head);
};

//Solution - string
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
 var isPalindrome = function(head) {
    let current = '', reverse = ''
    while(head) {
        current += head.val
        reverse = head.val + reverse
        head = head.next
    }
    return current === reverse
};

/*
For O(1) space complexity check 
https://leetcode.com/problems/palindrome-linked-list/solution/
https://leetcode.com/problems/palindrome-linked-list/

*/
var isPalindrome = function(head) {
    if(head === null) return true
	
    let ll = head
    const arr = [ll.val]
    
    while(ll.next !== null) {
        ll = ll.next;
        arr.push(ll.val)
    }
    
    let low = 0;
    let high = arr.length - 1;
	
    while(low < high) {
        if(arr[low] === arr[high]) {
            low++;
            high--;
        } else {
            return false;
        }
    }
    return true
};