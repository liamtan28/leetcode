/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


// nums can be repeated, as many times as needed
// these are combs, not perms, meaning you can have
// any ordering as unique solutions i.e.
// 2,1,1 and 1,1,2 are unique

// backtracking problem. Recursion to lock in a num,
// and check against all possible combs.

// [1,2,3], target = 4
var combinationSum4 = function(nums, target) {
    
    
    const result = [];
    
    function makeCombs(index, currentCombs, sum) {
        console.log({index,currentCombs, sum});
        if (sum > target) {
            return;
        }
        
        if(sum === target) {
            result.push([...currentCombs]);
        }
        
        
        for (let i = index; i < nums.length; i++) {
            const current = nums[i];
            
            sum += current;
            currentCombs.push(current);
            
            // only returns when sum > target
            makeCombs(index, currentCombs, sum);
            // i.e. first time the execution reaches this point
            // for inputs [1,2,3], target = 4
            // index = 0, currentCombs = [1,1,1,1,1], sum = 5
            
            sum -= current;
            // sum = 4
            currentCombs.pop();
            // currentCombs = [1,1,1,1];
            
        }
        
        
    }
    
    
    makeCombs(0, [], 0);
    return result.length;
    
};