/////////////////////////////////////
/*
With Sorting:
1.Build a hash based on character count, sort the hash from the largest count to smallest
2.A character count that is larger than half of the string length is considered invalid
3.Start filling characters to all the even indexs, i.e. 0, 2, 4,..., when we got to the end, start filling odd indexes i.e. 1,3,5,...
4.By filling the characters this way, we can make sure that no same characters will be adjacent to each other
*/
var reorganizeString = function(s) {
    const map = new Map();
	// 1. building map
    s.split('').forEach((letter)=>{
        map.set(letter,map.get(letter)+1||1);
    })
	
	// 1. sorting the map based on the occurances in descending order.
    const sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    
	// 2. getting the first value of sorted map and checking if greater than half of string length
    if(sortedMap.values().next().value > (s.length+1)/2) return "";
    
    const res=[];
    let index=0;
    
    for(let [key,value] of sortedMap){
        while(value--){
			// 5. if it reaches the end of string, start filling from odd position.
            if(index>=s.length) index=1;
			// 4. adding elements at even position.
            res[index]=key
            index+=2
        }
    }
	// converting array back to string
    return res.join('');
};


//////////////////////////////////Without sorting://///////////////////////////////////////
var reorganizeString = function(s) {
    const map = new Map()
    let max=0;
    let maxChar=''
    for(let c of s){
        map.set(c,map.get(c)+1||1)
		
		// instead of sorting as we did earlier, we are finding the maximum occuring char
        if(map.get(c)>max){
            max=map.get(c)
            maxChar=c
        }
    }
	// checking if max occurance is greater than half of string length(we used Math.ceil instead of s.length+1)
    if(max>Math.ceil(s.length/2))return ''
    
    let ind=0
    const res=[]
	// first placing the max occured charac in even pos.(0,2,4,...)
        while(max--){
            res[ind]=maxChar
            ind+=2
            map.set(maxChar,max)
        }
		
	// then placing the remaining charac's
    for(let [key,val] of map){
        while(val--){
            if(ind>=s.length)ind=1
            res[ind]=key
            ind+=2
        }
    }
    return res.join('')
};
