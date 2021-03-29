/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  
    const result = [];

    
    nums.sort((a,b) => a-b);
    
    
    function makeSet(index, currentSet) {
        result.push([...currentSet]);  
        
        // if the number is 3, were done
        if (index > nums.length - 1) {
            return;
        }
 
        for (let i = index; i < nums.length; i++) {
            
            const current = nums[i];
            // if selection is greater than focused number (i.e. we are just popping, )
            // and its the same number, skip.
            if(i > index && current === nums[i - 1]) continue;
            currentSet.push(current);   
           
            makeSet(i+1, currentSet);
            
            currentSet.pop();
            
        }
        
    }
    
    makeSet(0, []);
    
    return result;
    
};