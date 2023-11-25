// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

 // Definition for singly-linked list.
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

var addTwoNumbers = function (l1, l2) {
let dummyNode = new ListNode(0);
console.log(dummyNode)
let current = dummyNode;
let carry = 0;
while (l1  || l2 ) {
    const x = l1?.val !== undefined ? l1?.val : 0;
    const y = l2?.val !== undefined ? l2?.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
}
if (carry > 0) {
    current.next = new ListNode(carry)
}
return dummyNode.next
}
const l1 = new ListNode(2, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(6, new ListNode(5, new ListNode(6)));

const result = addTwoNumbers(l1, l2);
console.log(formatOutput(result));

function formatOutput(node) {
  const resultArray = [];
  while (node !== null) {
    resultArray.push(node.val);
    node = node.next;
  }
  return resultArray;
}
