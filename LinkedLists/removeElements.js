/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let current = head;
    let prev = current;
  while(current){
    if(head.val === val) head = head.next;
    if(current.val === val){
      current = current.next;
      prev.next = current;
      continue;
      
    }
    prev = current;
    current = current.next;
  }
  return head;
};

//alternate colution
var removeElements = function(head, val) {
    var current = head;
    var previous = null;
    
    while(current){
        if(current.val === val){
            if(previous){
                previous.next = current.next;
            }else{
                head = current.next;
            }
        }else{
            previous = current;
        }
        
        current = current.next;
    }
    
    return head;
};
/*
https://leetcode.com/explore/learn/card/linked-list/219/classic-problems/1207
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
*/

//Another solution

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;
	
	// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
	// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set curr.next to the node after it then try again
	// otherwise iterate forward
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};
