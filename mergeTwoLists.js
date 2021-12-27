
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};

//another solution
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  const val1 = l1.val;
  const val2 = l2.val;
  let mergedNode;
  if (val1 < val2) {
    mergedNode = new ListNode(val1);
    mergedNode.next = mergeTwoLists(l1.next, l2);
  } else {
    mergedNode = new ListNode(val2);
    mergedNode.next = mergeTwoLists(l2.next, l1);
  }
  return mergedNode;
};
