/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {

    const result = [];
    // sort the candidates so all are in order. Groups 1,1 together.
    candidates.sort((a,b) => a - b);
    
    function makeCombs(index, currentCombs, sum, ) {
        
        
       // console.log({ index, currentCombs, sum });
        
        if (sum > target) {
            return;
        }
        
        if (sum === target) {
            // create a shallow copy of currentCombs,
            // to ensure we don't get the original reference
            // (the original reference will be empty at the end)
            result.push([...currentCombs]);
        }
        
        for (let i = index; i < candidates.length; i++) {
            
            const current = candidates[i];
            // the array is ordered, so we simply check if the new
            // candidate is the same as the previous. If it is, 
            // then skip. This ensures, we don't get two of the same
            if(i > index && current === candidates[i - 1]) continue;
            sum += current;
            currentCombs.push(current);
            
            // repeat until sum > target (first condition of loop)
            // this is i+1 because we can only use each number once.
            // if for instance, we could use this any number of times
            // then we would use i
            makeCombs(i+1, currentCombs, sum);
            
            // get rid of the last number, that pushed sum > target.
            // then repeat process with the next candidate.
            sum -= current;
            currentCombs.pop();
        }
        
    }
    
    
    makeCombs(0, [], 0);
    return result;
    
    
};