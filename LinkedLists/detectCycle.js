var detectCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

/*
https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list
*/
//Explaination -> https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1214/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes
