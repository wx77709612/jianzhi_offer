/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = [],
        currentNode = head;
    while (currentNode){
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    while (arr.length > 0){
        print(arr.pop());
    }
}