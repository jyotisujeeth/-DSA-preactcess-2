var partition = function(head, x) {
let leftLinkedList = new ListNode(),rightLinkedList = new ListNode();
//make two lists denoting left and right parts
let it = head;//iterator
head = leftLinkedList;//to mark starting of left part (new head)
let temp = rightLinkedList;//to mark starting on right part
while(it != null){
    if(it.val<x){//node will be in left part
        leftLinkedList.next = it;
        leftLinkedList = leftLinkedList.next;
    }
    else{//node will be in right part
        rightLinkedList.next = it;
        rightLinkedList = rightLinkedList.next;
    }
    it = it.next;
    
}
rightLinkedList.next = null;//last node of right part will be last node of list
leftLinkedList.next = temp.next;//connect two lists

return head.next;
};
