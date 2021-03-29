/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/

/*

2, [2,3,6,7]
2,2 [2,3,6,7],
2,2,2, [2,3,6,7]
2,2,2,2 [2,3,6,7] X
2,2,2,3 [3,6,7] X
...
2,2,2,7 [7] X

2,2,3 [3,6,7] O
no need to proceed as cands are distinct

2,3, [3,6,7]
2,3,3 [3,6,7] X
2,3,6 [6,7] X
2,3,7 [7] X

2,6 [6,7] X
2,7 [7] X

3, [3,6,7] 

....





*/
var combinationSum = function(candidates, target) {
   
   const result = [];
   
   function makeCombs(index, currentCombs, sum) {
       
       // If sum is greater than target, reset
       if (sum > target) {
           return;
       }
       if (sum === target) {
           result.push([...currentCombs]);
       }

       for(let i = index; i < candidates.length; i++) {
           // push the current number
           currentCombs.push(candidates[i]);
           // add the sum
           sum += candidates[i];
           // rerun function. It will exit if we've gone above the sum
           makeCombs(i, currentCombs, sum);            
           // when we exit, remove this one from the sum, and remove the number 
           // from the checking array
           sum -= candidates[i];
           currentCombs.pop();
           // do this for all candidates
       }
       
   }
   
   makeCombs(0, [], 0);
   
   return result;
};

console.log(combinationSum([2,3,6,7], 7));