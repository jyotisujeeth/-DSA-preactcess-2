var findKthLargest = function(nums, k) {
    const max_heap = [];
    
    for(const num of nums){
        max_heap_push(max_heap, num);
        if(max_heap.length > k){
            max_heap.pop();
        }
    }
    
    let to_return;
    for(let i = 0; i < k; ++i){
        to_return = heap_pop(max_heap);
    }
    
    return to_return;
};


function max_heap_push(h, el){
    h.push(el);
    h.sort((a,b)=>b-a);
}

function heap_pop(h){
    return h.shift();
}
