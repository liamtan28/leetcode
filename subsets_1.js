/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/*
    Backtracking (recursion)
    
    we need to "lock in" a number
    and then apply all additional numbers against it
    
    // []
    
    // 1 [2,3]
    // 1 [3]
    // 2 [1, 3]
    ...
    
*/

// comments use input nums = [1,2,3]
var subsets = function(nums) {
    
    const result = [];

    function makeSet(index, currentSet) {
        
        // console.log({index, currentSet});
        result.push([...currentSet]);  
                
      
        // console.log({result});
        
        // if the number is 3, were done
        if (index > nums.length - 1) {
            return;
        }
 
        for (let i = index; i < nums.length; i++) {
            
            const current = nums[i];
            
            currentSet.push(current);
            
            makeSet(i+1, currentSet);
            
            currentSet.pop();
            
        }
        
    }
    
    makeSet(0, []);
    
    return result;
    
    
};