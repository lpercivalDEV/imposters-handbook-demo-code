//====== Imposters Handbook - Demo Codes ======//



//=== BIG O NOTATION EXAMPLES ===//

'use strict'

const nums = [1,2,3,4,5];

//=== ORDER 1 Example(s) ===//
const firstNumber = nums[0];

console.log(firstNumber);


//=== ORDER N Example ===//
let sum = 0;

for(let num of nums){
  sum += num;
}

console.log(sum);


 const sumContiguousArray = function(ary){
  //get the last element
  const lastItem = ary[ary.length-1];
  //Use Gauss' series formula for summing
  return lastItem*(lastItem+1)/2;
}

const sumOfArray = sumContiguousArray(nums);
console.log(sumOfArray);



//=== ORDER N^2 Example ===//

//Simple brute force solution
const hasDuplicates = function(num){
  //loop through the list, our O(n) operation
  for(let i = 0; i < nums2.length; i++){
    const thisNum = nums2[i];
    //loop the list again, the O(n^2) operation
    for(let j=0; j< nums2.length; j++){
      //make sure we're not checking same number
      if(j !== i){
        const otherNum = nums2[j];
        //if there's an equal value return:
        if(otherNum === thisNum) return true;
      }
    }
  }
  //if we're here, no dups
  return false;
}

const nums2 = [1,2,3,4,5,5];
console.log(hasDuplicates(nums2)); //true
