/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    var curA = headA;
    var curB = headB;
    while (curA != curB) {
        curA = curA == null ? headB : curA.next;
        curB = curB == null ? headA : curB.next;
    }
    return curA;
};

// explaination - JS -> https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/discuss/255597/javascript

/*        a
list A ======\    x 
              O======{}
list B ======/
          b
O - intersection node 
{} - tail node  is null
If intersection node is present - 
we will travel for list A -> a + x + 1 (for null), after reaching null reset it to headB, so it total distance travelled will be a+x+1+b
similarly for list B -> b + x + 1 + a, so both pinters reach an intersection point at the same time, if it exists
If no intersection node,
          a
list A ======{}

list B ======={}
          b
so travelling for list A -> a+1+b+1 and list B -> b+1+a+1; both never reach a intersection point as there is none;

Explaination - Java - 
https://imgtu.com/i/P7OXSx

https://leetcode.com/problems/intersection-of-two-linked-lists/discuss/49785/Java-solution-without-knowing-the-difference-in-len
For those who struggle: let's split the both paths into s1 = s1_diff + common and s2 = s2_diff + common. The common part is the part which is, well, common for both of the paths. On the second iteration the first pointer will go through s1_diff + common + s2_diff. The second pointer will go through s2_diff + common + s1_diff. After they go through those paths, they will meet. If there is no common part, then the both pointers will be null.
*/