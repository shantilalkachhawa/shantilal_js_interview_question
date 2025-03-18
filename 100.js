// // 1- Palindrome 
// function palindromic(n){
//     if(n<0){
//         return false;
//     }
//     let original = n; 
//     let reversed = 0;
//     while(n > 0){
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     return original === reversed;
// }
// console.log(palindromic(121)) //ture
// console.log(palindromic(-121)) // false
// console.log(palindromic(123)) //false
// //OR
// function palindromeCheck(num) {
//     let numStr = num.toString();
//     let result = numStr.split('').reverse().join('');
//     return numStr === result;
// }
// console.log(palindromeCheck(121)); // true
// console.log(palindromeCheck(123)); // false

// 2-Power of two -
// Time Complexity: O(log n)
// function powerOfTwo(n){
//     if(n <= 0){
//         return false
//     }
//     while(n >1){
//         if (n % 2 !== 0) {
//             return false; // If not divisible by 2, it can't be a power of 2.
//         }
//         n = n/2;
//     }
//     return true;
// }
// // Using Bitwise AND | Time Complexity: O(1)
// function powerOfTwo(n) {
//     return n > 0 && (n & (n - 1)) === 0;
// }
// // Using Math Logarithm | Time Complexity: O(1)
// function powerOfTwo(n) {
//     return n > 0 && Math.log2(n) % 1 === 0;
// }
// console.log(powerOfTwo(20)); // false
// console.log(powerOfTwo(16)); // true
// console.log(powerOfTwo(10)); // false



//  function fibonacciSeries(n){
//     if (n === 0) return 0; 
//     if (n === 1) return 1; 
//     let arr=[0];
//     let firstNum = 0;
//     let secondNum = 1;
//     for(let i=1;i<=n;i++){
//         let thirdNum = firstNum +secondNum;
//         firstNum =secondNum;
//         secondNum = thirdNum;
//         arr.push(firstNum)
//     }
//     return arr;
// }

// console.log(fibonacciSeries(7)); // [0, 1, 1, 2, 3, 5, 8, 13]

// console.log(fibonacciNumber(7))
// 4-TribonacciNumber series
// function TribonacciNumber(n){
//     if (n === 0) return 0; 
//     if (n === 1) return 1; 
//     // if (n === 1) return 1; 
//     let arr=[0];
//     let firstNum = 0;
//     let secondNum = 1;
//     let thirdNum = 1;
//     for(let i=1;i<=n;i++){
//         let forthNum = firstNum +secondNum+thirdNum;
//         firstNum =secondNum;
//         secondNum = thirdNum;
//         thirdNum = forthNum;
//         arr.push(firstNum);
//     }
//     return arr;
// }
// console.log(TribonacciNumber(7))

// 5- water bottle giver num of bottle and exchage bottle
// Using Division & Modulus
// 	Time Complexity O(log N) & Space Complexity O(log N)
// function waterBotle(numOfBotle,exchagebottle){
//     let total = numOfBotle;  
//     while(numOfBotle >= exchagebottle){
//         let  newBotle = Math.floor(numOfBotle / exchagebottle);
//         let  remBotle = numOfBotle % exchagebottle;
//         total +=newBotle;
//         numOfBotle = newBotle + remBotle;
//     }
//     return total;
// }
// console.log(waterBotle(22, 4)); // Output: 29
// Mathematical Approach (No Loops, No Recursion) 
// // 	Time Complexity O(1) & Space Complexity O(1)
// function waterBottleMath(numOfBottle, exchangeBottle) {
//     return numOfBottle + Math.floor((numOfBottle - 1) / (exchangeBottle - 1));
// }
// console.log(waterBottleMath(22, 4)); // Output: 29
// Total Bottles=Initial Bottles+ ( Exchange Bottles−1 /Initial Bottles−1)

// Recursive Approach // Clean but uses extra memory
// // 	Time Complexity O(log N) & Space Complexity O(log N)
// function waterBottleRecursive(numOfBottle, exchangeBottle, total = 0) {
//     if (numOfBottle < exchangeBottle) return total + numOfBottle;
//     let newBottle = Math.floor(numOfBottle / exchangeBottle);
//     let remBottle = numOfBottle % exchangeBottle;
//     return waterBottleRecursive(newBottle + remBottle, exchangeBottle, total + newBottle);
// }
// console.log(waterBottleRecursive(22, 4)); // Output: 29


// console.log(waterBotle(22,4))
// Two sum
// 	Time Complexity O(n)
// function twoSum(arr, target) {
//     let map = {}; 

//     for (let i = 0; i < arr.length; i++) {
//         let complement = target - arr[i];
//         if (map[complement] !== undefined) {
//             return [map[complement], i]; 
//         }
//         map[arr[i]] = i; 
//     }
//     return [];
// }

// console.log(twoSum([2, 4, 5, 1, 7], 11)); // Output: [2, 4]
// 	Time Complexity O(n*2)
// function twoSum(arr,value){
//     for(let i = 0; i < arr.length; i++){
//         for(let j=i+1; j <arr.length ; j++){
//             if(arr[i]+arr[j] === value){
//                 return [i,j];
//             }
//         }
//     }
// }
// const arr =[2,4,5,1,7]
// console.log(twoSum(arr,11))// Output: [2, 4]

// // 6 Add to Array form of integer
// function addArrayToInteger(arr,k){
//     let p = arr.length-1;
//     let carry =  0;
//     let result =[];

//     while( p >= 0 || k > 0 ){
//         let numVal = 0;
//         if(p >=0){
//             numVal = arr[p];
//         }
//         let  lastDigit = k % 10; 
//         let sum = numVal + lastDigit + carry;
//         // sum = sum % 10;// is  not working
//         carry = Math.floor(sum / 10);
//         result.push(sum);
//         k = Math.floor(sum % 10);
//         p--;
//     }
//     if(carry > 0){
//         result.push(carry);
//     }
// return result;

// }
// console.log(addArrayToInteger([1,2,4,5],999))
// 8- Maximum product of two numbers
// 	Time Complexity O(n)
// function addTwoProduct(arr){
//     let firstMax=-1;
//     let secondMax=-1;
//     for(let i = 0; i < arr.length; i++){
//     if (arr[i] > firstMax) {
//         secondMax = firstMax;
//         firstMax = arr[i];
//     } else if (arr[i] > secondMax) {
//         secondMax = arr[i];
//     }
//     }
//     let result = 0;
//     result = ((firstMax- 1)* (secondMax - 1));
//     return result;
// }
// console.log(addTwoProduct([2,3,4,5])) //12 
// console.log(addTwoProduct([2,3,4,7,6,5])) //30
// // 	Time Complexity O(n log n)
// function addTwoProductSort(arr) {
//     arr.sort((a, b) => a - b); // Sort in ascending order
//     let n = arr.length;
//     return (arr[n - 1] - 1) * (arr[n - 2] - 1);
// }

// console.log(addTwoProductSort([2, 3, 4, 5])); // 12
// console.log(addTwoProductSort([2, 3, 4, 7, 6, 5])); // 30


// 7- Merge two shortest list
// Time Complexity O(n+m)
// function mergeSortedArr(arr1,arr2){
//     let result =[];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length ){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i]);
//             i++;
//         }else{
//             result.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i <arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length ){
//         result.push(arr2[j]);
//         j++
//     }

//     const  m = Math.floor(result.length / 2)
//     const median = m %2=== 0?  (result[m-1]+result[m])/2 : result[m] ;
//     console.log(median,'median')
    
//     return result;


// }
// Time Complexity O(n+m)
// Space Complexity O(n+m)
// function mergeSortedArr(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i++]);
//         } else {
//             result.push(arr2[j++]);
//         }
//     }

//     while (i < arr1.length) result.push(arr1[i++]);
//     while (j < arr2.length) result.push(arr2[j++]);

//     const n = result.length;
//     return n % 2 === 0 ? (result[n / 2 - 1] + result[n / 2]) / 2 : result[Math.floor(n / 2)];
// }

// const arr1 =[1,3,5,6,7,8]
// const arr2 =[2,4,7,9]
// console.log(mergeSortedArr(arr1,arr2))

// Day 9 Meadian of two shorted Arrays
// console.log(mergeSortedArr([1,3],[2]));
// console.log(mergeSortedArr([1,3],[2,4]));

// Day 10  Missing Number of Arrays (0,n)
// Time Complexity O(n)
// function missNumber(array){
//     let n  = array.length;
//     let arraySum = 0;
//     for(let i =0 ; i < n; i++){
//         arraySum += array[i];
//     }
//     let expectedSum = (n*(n+1))/2;
//     let  missingNum = expectedSum - arraySum  ;
//     return missingNum;
// }
// console.log(missNumber([3,0,1]));//Range [0,3] // Output 2
// console.log(missNumber([0,1]));//Range[0,2] // Output 2
// console.log(missNumber([9,6,4,2,3,5,7,0,1]));//Range [0 ,9] // Output 8
// Time Complexity O(n)
// function missNumber(array) {
//     let n = array.length;
//     let arraySum = array.reduce((sum, num) => sum + num, 0);
//     let expectedSum = (n * (n + 1)) / 2;
//     return expectedSum - arraySum;
// }
// console.log(missNumber([3,0,1]));//Range [0,3] // Output 2
// console.log(missNumber([0,1]));//Range[0,2] // Output 2
// console.log(missNumber([9,6,4,2,3,5,7,0,1]));//Range [0 ,9] // Output 8

// // n number of sum and array of sum subtract then outcome will get missing number
// // subtracting the sum of the array from the expected sum of the first n natural numbers.
// console.log(missNumber([3,0,1]));//Range [0,3]
// console.log(missNumber([0,1]));//Range[0,2]
// console.log(missNumber([9,6,4,2,3,5,7,0,1]));//Range [0 ,9]

// Day 11  Remove the  Number of Arrays
// Time Complexity O(n)
// function removeTheNumberOfArrays(arr, k) {
//     let pointer = 0;
//     let outcome = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== k) {
//             arr[pointer] = arr[i]; 
//             pointer++;
//         } else {
//             outcome++;
//         }
//     }
//     for (let i = pointer; i < arr.length; i++) {
//         arr[i] = '-';
//     }
//     return arr; 
// }

// console.log(removeTheNumberOfArrays([3, 2, 2, 3], 3)); // Output: [2, 2, '-', '-']
// console.log(removeTheNumberOfArrays([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: [0, 1, 3, 0, 4, '-', '-', '-']

// // Time Complexity O(n)
// function removeTheNumberOfArrays(arr, k) {
//     let filteredArr = arr.filter(num => num !== k); 
//     let missingCount = arr.length - filteredArr.length; 
//     return filteredArr.concat(Array(missingCount).fill('-')); 
// }

// console.log(removeTheNumberOfArrays([3, 2, 2, 3], 3)); // Output: [2, 2, '-', '-']

// console.log(removeTheNumberOfArrays([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: [0, 1, 3, 0, 4, '-', '-', '-']



// Day 12  Square of the  Sorted Arrays o(n) not use nlogn
// Time Complexity O(n)
// function SquareOfArray(arr){
//     let newArr =[];
//     let start =0 ;
//     let end =arr.length -1 ;
//     let ptr = arr.length -1;
//     while(start <= end){
//         let ss = (arr[start]*arr[start]);
//         let es = (arr[end]*arr[end]);
//         if(ss > es){
//             newArr[ptr]=ss;
//             start++;
//             ptr--;
//         }else{
//             newArr[ptr]=es;
//             end--;
//             ptr--;
//         }
//     }
// return newArr;
// }
// console.log(SquareOfArray([-7,-4,3,0,1,2])); //[ 0, 1, 4, 9, 16, 49 ]
// console.log(SquareOfArray([-7,-3,2,3,11]));//[ 4, 9, 9, 49, 121 ]
// console.log(SquareOfArray([4,-1,0,3,10]));//[ 0, 1, 9, 16, 100 ]
// Mapping (map()): O(N)
// Sorting (sort()): O(N log N)
//Overall Time Complexity O(nlongn)
// function SquareOfArray(arr){
//     return arr.map(num=>num*num).sort((a,b)=>a-b)    

// }
// console.log(SquareOfArray([-7,-4,3,0,1,2])); //[ 0, 1, 4, 9, 16, 49 ]
// console.log(SquareOfArray([-7,-3,2,3,11]));//[ 4, 9, 9, 49, 121 ]
// console.log(SquareOfArray([4,-1,0,3,10]));//[ 0, 1, 9, 16, 100 ]

// Day 14  Two sum 2   // Hamesha sorted array ki value increse j hoti index increse hone par
// Optimise solution
// // Time Complexity: O(N)
// function twoSum(arr, target) {
//     let start = 0;
//     let end = arr.length-1;
//     while(start < end){
//         let sum  = arr[start]+arr[end];
//         if(sum == target){
//             return [start,end];
//         }else if( sum > target){
//             end --;

//         }else{
//             start++;
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9));//[ 0, 1,]
// console.log(twoSum([2,3,4],6)); // [0,2]
// // Time Complexity: O(N*2)
// function twoSumBruteForce(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }
// console.log(twoSumBruteForce([2,7,11,15],9));//[ 0, 1,]
// console.log(twoSumBruteForce([2,3,4],6));// [0,2]

// Bulb swicher 
// 15 Largest number at least of twise of other 
// //Time Complexity O(n)
// function largestTwiceOfOther(arr) {
//     let n = arr.length;
//     if (n < 2) return false; 

//     let largestNum = -1;
//     let secondMax = -1;

//     for (let i = 0; i < n; i++) {
//         if (arr[i] > largestNum) {
//             secondMax = largestNum;
//             largestNum = arr[i];
//         } else if (arr[i] > secondMax) {
//             secondMax = arr[i];
//         }
//     }

//     return largestNum >= secondMax * 2;
// }
// console.log(largestTwiceOfOther([3, 6, 1, 0])); // true (6 is at least twice of all other numbers)
// console.log(largestTwiceOfOther([1, 2, 3, 4])); // false (4 is not at least twice of 3)
// console.log(largestTwiceOfOther([10, 5, 2]));   // true (10 is at least twice of 5 and 2)
// console.log(largestTwiceOfOther([1]));          // false (only one element)
// console.log(largestTwiceOfOther([]));           // false (empty array)
// //Time Complexity O(n log n)
// function largestTwiceOfOther(arr) {
//     if (arr.length < 2) return false; 

//     arr.sort((a, b) => a - b);
//     return arr[arr.length - 1] >= arr[arr.length - 2] * 2;
// }

// console.log(largestTwiceOfOther([3, 6, 1, 0])); // true
// console.log(largestTwiceOfOther([1, 2, 3, 4])); // false
// console.log(largestTwiceOfOther([10, 5, 2]));   // true
// console.log(largestTwiceOfOther([1]));          // false
// console.log(largestTwiceOfOther([]));           // false
// //Time Complexity O(n)
// function largestTwiceOfOther(arr) {
//     if (arr.length < 2) return false;

//     let largestNum = Math.max(...arr);
//     let filteredArr = arr.filter(num => num !== largestNum); // Remove largest number
//     let secondMax = filteredArr.length ? Math.max(...filteredArr) : 0; // Get second max

//     return largestNum >= secondMax * 2;
// }

// console.log(largestTwiceOfOther([3, 6, 1, 0])); // true
// console.log(largestTwiceOfOther([1, 2, 3, 4])); // false
// console.log(largestTwiceOfOther([10, 5, 2]));   // true
// console.log(largestTwiceOfOther([1]));          // false
// console.log(largestTwiceOfOther([]));           // false




// 16 Container with most water
// Time Complexity O(n)
// function waterSol(arr){
//     let start =0;
//     let end = arr.length-1;
//     let maxCap = 0;
//     while(start < end){
//         let height = Math.min(arr[start],arr[end]);
//         let width = end - start;
//         let currCap = height * width;
//         maxCap = Math.max(maxCap,currCap);
//         if(arr[start] < arr[end]){
//             start++;
//         }else{
//             end --;
//         }
//     }
//     return maxCap;
// }
// console.log(waterSol([4,7,3,8,1]));
// console.log(waterSol([1,8,6,2,5,4,8,3,7]));
// console.log(waterSol([1,1]));
// // Time Complexity O(n^2)
// function waterSolBruteForce(arr) {
//     let maxCap = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let height = Math.min(arr[i], arr[j]);
//             let width = j - i;
//             let currCap = height * width;
//             maxCap = Math.max(maxCap, currCap);
//         }
//     }
//     return maxCap;
// }
// console.log(waterSolBruteForce([4,7,3,8,1])); 
// console.log(waterSolBruteForce([1,8,6,2,5,4,8,3,7])); 
// console.log(waterSolBruteForce([1,1])); 




// Increasing Triplet Subsequence|
//Time Complexicity 0(n^3) 
// Using Nested Loops (Brute Force) 
function increTripletSub(arr){
    for(let i=0; i < arr.length; i ++){
        for(let j=i+1; j < arr.length; j++){
            for(let k=j+1; k < arr.length ; k++){
                if( arr[i]< arr[j] && arr[j] < arr[k]){
                    return true;
                }
            }
        }
    }
    return false;

}
// Optimized Linear Scan
// Time Complexicity 0(n)
// function increTripletSub(arr){
//     for(let i=0 ; i < arr.length; i ++){
//         let frstIndx = -1;
//         let scndIndx =-1;
//         let trdIndx = -1;
//            frstIndx = arr[i]
//            scndIndx = arr[i+1]
//            trdIndx = arr[i+2]
//            if(frstIndx < scndIndx &&  scndIndx < trdIndx ){
//             return true;
//            }

//     }
//     return false;
//     }


// console.log(increTripletSub([1, 2, 3, 4, 5])); // true (1 < 2 < 3)
// console.log(increTripletSub([5, 4, 3, 2, 1])); // false
// console.log(increTripletSub([2, 1, 5, 0, 4, 6])); // true (1 < 4 < 6)

// // Time Complexicity 0(n) 
// function increTripletSub(arr) {
//     let first = Infinity;
//     let second = Infinity;
//     for (let num of arr) {
//         if (num <= first) {
//             first = num; 
//         } else if (num <= second) {
//             second = num; 
//         } else {
//             console.log(`Triplet found: ${first}, ${second}, ${num}`);
//             return true; 
//         }
//     }
//     return false;
// }

// function increTripletSub(arr) {
//     let first = Infinity, second = Infinity;

//     return arr.some(num => {
//         if (num <= first) first = num;
//         else if (num <= second) second = num;
//         else return true; // Found valid triplet
//         return false;
//     });
// }

// console.log(increTripletSub([1, 2, 3, 4, 5])); // true
// console.log(increTripletSub([5, 4, 3, 2, 1])); // false
// console.log(increTripletSub([2, 1, 5, 0, 4, 6])); // true
// console.log(increTripletSub([1, 2, -1, -2, 3])); // true
// console.log(increTripletSub([3, 2, 1, 5, 0, 4, 6])); // true
// console.log(increTripletSub([1, 1, 1, 1])); // false





// Maximum Ascending Subarray Sum| Day19  

// function maxAscendingSubarray(arr) {
//     if (arr.length === 0) return 0;

//     let currSum = arr[0]; 
//     let maxSum = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             currSum += arr[i]; 
//         } else {
//             currSum = arr[i]; 
//         }
//         maxSum = Math.max(maxSum, currSum); 
//     }
//     return maxSum;
// }

// console.log(maxAscendingSubarray([10, 20, 30, 5, 10, 50]));  // Output: 65 (10+20+30)
// console.log(maxAscendingSubarray([10, 20, 30, 40, 50]));    // Output: 150 (entire array)
// console.log(maxAscendingSubarray([12, 17, 15, 13, 10, 11, 12])); // Output: 29 (10+11+12)
// console.log(maxAscendingSubarray([100, 10, 1]));            // Output: 100 (single max element)
// console.log(maxAscendingSubarray([]));                      // Output: 0 (empty array)



// Find lucky Integer in An Array | Day20
// OR find the frequencies of array equal to the its value 
// Using Hash map 
// function luckyInteger(arr) {
//     let numCount = {};
//     let luckyInt = -1;
//     for (let num of arr) {
//         numCount[num] = (numCount[num] || 0) + 1;
//     }
//     console.log(numCount, 'numCount');
//     for (let num in numCount) {
//         if (parseInt(num) === numCount[num]) {
//             luckyInt = Math.max(luckyInt, parseInt(num)); 
//         }
//     }
//     return luckyInt;
// }
// console.log(luckyInteger([2, 2, 3, 4])); // Output: 2
// console.log(luckyInteger([1, 2, 2, 3, 3, 3])); // Output: 3
// console.log(luckyInteger([2, 2, 2, 3, 3])); // Output: -1



// Binary search two wordd like sorted and l  Day21
// Binary search time comlexity is logN
// Time Comlexity is O(log N)
// function binarySearch(arr,target){
//     let  start = 0;
//     let  end = arr.length - 1;
//     while(start <= end){
//         let mid = Math.floor((start + end)/2);
//         if(arr[mid] == target){
//             return mid;
//         }else if(arr[mid] < target){
//             start = mid + 1
//         }else{
//             end = mid - 1;
//         }
//     }
//     return -1;
   
//  }
// console.log(binarySearch([-1,0,3,5,9,12],9));
// console.log(binarySearch([-1,0,3,5,9,12],4));
// Time Complexity: O(log N)
// function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
//     if (start > end) return -1;
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, end);
//     return binarySearchRecursive(arr, target, start, mid - 1);
// }
// console.log(binarySearch([-1,0,3,5,9,12],9));
// console.log(binarySearch([-1,0,3,5,9,12],4));
// Time Complexity: O(N)
// function binarySearchFindIndex(arr, target) {
//     let start = 0, end = arr.length - 1;
//     return arr.findIndex((_, idx) => {
//         if (start > end) return false;
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) return true;
//         if (arr[mid] < target) start = mid + 1;
//         else end = mid - 1;
//         return false;
//     });
// }
// console.log(binarySearch([-1,0,3,5,9,12],9));
// console.log(binarySearch([-1,0,3,5,9,12],4));

// FInd the first and last postion on element in Sorted  Day22
// Time Complexity O(log n)
// function findElement(arr, target) {
//     let first = firstOccurrence(arr, target);
//     let last = lastOccurrence(arr, target);
//     return [first, last];
// }
// function firstOccurrence(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let firstIndex = -1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             firstIndex = mid; // Store the current index
//             end = mid - 1;    // Continue searching in the left half
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return firstIndex;
// }
// function lastOccurrence(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let lastIndex = -1;

//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] === target) {
//             lastIndex = mid; // Store the current index
//             start = mid + 1; // Continue searching in the right half
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return lastIndex;
// }

// console.log(findElement([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(findElement([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
// console.log(findElement([], 0));                  // Output: [-1, -1]

// // Time Complexity O(n)
// function findElement(arr, target) {
//     return [arr.indexOf(target), arr.lastIndexOf(target)];
// }

// console.log(findElement([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(findElement([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
// console.log(findElement([], 0)); // Output: [-1, -1]


// Search in Rotated Sorted Array   Day23
// Time Complexity O(logN)
// function searchRotedArray(arr,target){
//     let start =0;   
//     let end = arr.length - 1;
//     while(start <= end){
//         let mid = Math.floor((start + end)/2);
//         if(arr[mid] === target){
//             return mid;
//         }else if( arr[mid] >= arr[start]){ // Check part is 1st part id sorted 
//             if( target >= arr[start] && target <= arr[mid]){
//                 end = mid - 1;
//             }else{
//                 start = mid + 1;
//             }
//         }else{
//             if(target >= arr[mid] && target <= arr[end]){
//                 start = mid + 1;
//             }else{
//                 end = mid - 1;
//             }
//         }
//     }
//     return -1;
// }
// console.log(searchRotedArray([4,5,6,7,0,1,2],0));
// console.log(searchRotedArray([4,5,6,7,0,1,2],3));

// // Time Complexity O(n)
// function searchLinear(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(searchLinear([4,5,6,7,0,1,2], 0));
// console.log(searchLinear([4,5,6,7,0,1,2], 3));


// Find minmum in Rotated Sorted Array   Day24
// Time Complexity O(logN)
// function findMinValue(arr) {
//     if (arr.length === 1) {
//         return arr[0]; // Single element array
//     }
//     if (arr[0] < arr[arr.length - 1]) {
//         return arr[0];
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] > arr[end]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }
//     }

//     return arr[start];
// }


// console.log(findMinValue([3, 4, 5, 1, 2])); // Output: 1
// console.log(findMinValue([4, 5, 6, 7, 0, 1, 2])); // Output: 0
// console.log(findMinValue([11, 13, 15, 17])); // Output: 11

// // Time Complexity O(logN)
// function findMinValueRecursive(arr, start = 0, end = arr.length - 1) {
//     if (start === end) {
//         return arr[start];
//     }

//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] > arr[end]) {
//         return findMinValueRecursive(arr, mid + 1, end);
//     } else {
//         return findMinValueRecursive(arr, start, mid);
//     }
// }

// console.log(findMinValueRecursive([3, 4, 5, 1, 2])); // Output: 1
// console.log(findMinValueRecursive([4, 5, 6, 7, 0, 1, 2])); // Output: 0
// console.log(findMinValueRecursive([11, 13, 15, 17])); // Output: 11

// // Time Complexity O(n)
// function findMinValueLinear(arr) {
//     let minVal = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < minVal) {
//             minVal = arr[i];
//         }
//     }
//     return minVal;
// }

// console.log(findMinValueLinear([3, 4, 5, 1, 2])); // Output: 1
// console.log(findMinValueLinear([4, 5, 6, 7, 0, 1, 2])); // Output: 0
// console.log(findMinValueLinear([11, 13, 15, 17])); // Output: 11


// function findMinValue(arr){
//     if(arr.length ===1){
//         return arr[0];
//     }else if(arr[0] < arr[arr.length -1]){
//         return arr[0];
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     while(start < end){
//         let mid = Math.floor((start + end)/2);
//         if(arr[mid] > arr[end]){
//             start = mid + 1;
//         } else{
//             end = mid;
//         }
//     }
//     return arr[start]; 
// }
// console.log(findMinValue([3,4,5,1,2]));
// console.log(findMinValue([4,5,6,7,0,1,2]));


// Find Peak Element | Day 25  right and left side both side greter value
//Time complexity O(log n)
// function findPeakElement(num){
//     if(num.length == 1){
//         return 0;
//     }else if(num[0] > num[1]){
//         return 0;
//     }else if(num[num.length-1] > num[num.length-2]){
//         return num.length-1;
//     }else{
//         let start = 1;
//         let end = num.length - 2;
//         while(start <=end){
//             let mid = Math.floor((start+end)/2)
//             if(num[mid] > num[mid + 1] && num[mid] > num[mid-1]){
//                 return mid;
//             }else if(num[mid] < num[mid+1]){
//                 start=mid+1;
//             }else{
//                 end = mid-1;
//             }
//         }
//         return -1;
//     }

// }
// console.log(findPeakElement([1,2,3,1]))
// console.log(findPeakElement([1,2,1,3,5,6,4]))

//Time complexity O(log n)
// function findPeakElementRecursive(nums, left = 0, right = nums.length - 1) {
//     if (left === right) return left; 
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] > nums[mid + 1]) {
//         return findPeakElementRecursive(nums, left, mid); // Move left
//     } else {
//         return findPeakElementRecursive(nums, mid + 1, right); // Move right
//     }
// }

// console.log(findPeakElementRecursive([1, 2, 3, 1])); // Output: 2
// console.log(findPeakElementRecursive([1, 2, 1, 3, 5, 6, 4])); // Output: 5

// //Time complexity O(n)
// function findPeakElementLinear(nums) {
//     let n = nums.length;
//     if (n === 1) return 0;
//     if (nums[0] > nums[1]) return 0;
//     if (nums[n - 1] > nums[n - 2]) return n - 1;

//     for (let i = 1; i < n - 1; i++) {
//         if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findPeakElementLinear([1, 2, 3, 1])); // Output: 2
// console.log(findPeakElementLinear([1, 2, 1, 3, 5, 6, 4])); // Output: 5

// Search Insert Position | Day 26

// function searchInserationPosition(arr,target){

//     let start=0;
//     let end = arr.length -1;
//     while(start <= end){
//         let mid = Math.floor((start + end)/2)
//         if(arr[mid]== target){
//             return mid;
//         }else if(target >  arr[mid]){
//             start = mid +1;
//         }else{
//             end =mid - 1;
//         }
//     }
//     return start;
    

// }
// console.log(searchInserationPosition([1,3,5,6],5));// o/p - 2
// console.log(searchInserationPosition([1,3,5,6],2));// o/p -1
// console.log(searchInserationPosition([1,3,5,6],7)); // o/p -4
// // Time Complexity O(n)
// function searchInsertionPositionLinear(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= target) {
//             return i;
//         }
//     }
//     return arr.length; // Insert at the end
// }

// console.log(searchInsertionPositionLinear([1, 3, 5, 6], 5)); // Output: 2
// console.log(searchInsertionPositionLinear([1, 3, 5, 6], 2)); // Output: 1
// console.log(searchInsertionPositionLinear([1, 3, 5, 6], 7)); // Output: 4
// console.log(searchInsertionPositionLinear([1, 3, 5, 6], 0)); // Output: 0

// // Time Complexity O(logN)
// function searchInsertionPositionRecursive(arr, target, start = 0, end = arr.length - 1) {
//     if (start > end) return start; // Return the insertion position

//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === target) return mid;
//     if (target > arr[mid]) {
//         return searchInsertionPositionRecursive(arr, target, mid + 1, end);
//     } else {
//         return searchInsertionPositionRecursive(arr, target, start, mid - 1);
//     }
// }

// console.log(searchInsertionPositionRecursive([1, 3, 5, 6], 5)); // Output: 2
// console.log(searchInsertionPositionRecursive([1, 3, 5, 6], 2)); // Output: 1
// console.log(searchInsertionPositionRecursive([1, 3, 5, 6], 7)); // Output: 4
// console.log(searchInsertionPositionRecursive([1, 3, 5, 6], 0)); // Output: 0


// Single Element in a Sorted Array | Day 27
// o(logn) & 0(1) [no space]

// function nonDuplicate(num){
//     if(num.length ===1){
//         return num[num.length]
//     }
//     else if(num[0] != num[1]){
//         return num[0];
//     }else if(num[num.length -1] != num[num.length -2]){
//         return num[num.length-1];
//     }else{
//         let start =1;
//         let end = num.length - 2;
//         while(start <= end){
//             let mid =Math.floor((start+end)/2)
//             if(num[mid] != num[mid-1] &&  num[mid] != num[mid +1]){
//                 return num[mid];
//             }else if(mid % 2 ===1){ // index is odd
//                 if(num[mid] == num[mid-1]){
//                     start= mid +1;
//                 }else{
//                     end = mid -1;
//                 }

//             }else{ // index is even
//                 if(num[mid] == num[mid+1]){
//                     start= mid +1;
//                 }else{
//                     end = mid -1;
//                 }
//             }

//         }
//         return -1;
//     }

// }
// // trick left & right are not same 
// // Squencce odd & even 
// console.log(nonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Output: 2
// console.log(nonDuplicate([3, 3, 4, 4, 7, 10, 10])); 
//Time Complexity O(n)
// function nonDuplicateLinear(nums) {
//     for (let i = 0; i < nums.length; i += 2) {
//         if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
//     return -1;
// }

// console.log(nonDuplicateLinear([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Output: 2
// console.log(nonDuplicateLinear([3, 3, 4, 4, 7, 10, 10])); // Output: 7

// Bit Manipulation (O(n)) – XOR Trick

// function nonDuplicateXOR(nums) {
//     let result = 0;
//     for (let num of nums) {
//         result ^= num;
//     }
//     return result;
// }

// console.log(nonDuplicateXOR([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Output: 2
// console.log(nonDuplicateXOR([3, 3, 4, 4, 7, 10, 10])); // Output: 7

// function nonDuplicateRecursive(nums, start = 0, end = nums.length - 1) {
//     if (start === end) return nums[start]; // Base case: only one element left

//     let mid = Math.floor((start + end) / 2);

//     if (mid % 2 === 0) {
//         if (nums[mid] === nums[mid + 1]) {
//             return nonDuplicateRecursive(nums, mid + 2, end);
//         } else {
//             return nonDuplicateRecursive(nums, start, mid);
//         }
//     } else {
//         if (nums[mid] === nums[mid - 1]) {
//             return nonDuplicateRecursive(nums, mid + 1, end);
//         } else {
//             return nonDuplicateRecursive(nums, start, mid - 1);
//         }
//     }
// }

// console.log(nonDuplicateRecursive([1, 1, 2, 3, 3, 4, 4, 8, 8])); // Output: 2
// console.log(nonDuplicateRecursive([3, 3, 4, 4, 7, 10, 10])); // Output: 7




//  Sort Colors | Day 28  //red ,blue,white 
// dutch national flag
// function sortColor(arr){
//     function swap(num,i,j){
//         let temp = num[i];
//         num[i]=num[j];
//         num[j]=temp;
//     }
//     let low =0;
//     let mid =0; 
//     let high =arr.length -1;
//     while(mid <= high){
//         if(arr[mid] == 0){
//             swap(arr,low,mid)
//             low++;
//             mid++;
//         }else if(arr[mid] ==1){
//             mid++;clearInterval
//         }else{
//             swap(arr,high,mid)
//               high--;
//         }
//     }
//     return arr;

// }
// console.log(sortColor([2,0,2,1,1,0])) //[ 0, 0, 1, 1, 2, 2 ]
// console.log(sortColor([2,0,1])) //[ 0, 1, 2 ]

// //Time Complexity O(n log n)
// function sortColorQuickSort(arr) {
//     return arr.sort((a, b) => a - b);
// }

// console.log(sortColorQuickSort([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
// console.log(sortColorQuickSort([2, 0, 1]));         // Output: [0, 1, 2]

// //Time Complexity O(n)
// function sortColorRecursive(arr, low = 0, mid = 0, high = arr.length - 1) {
//     if (mid > high) return arr; // Base case

//     if (arr[mid] === 0) {
//         [arr[low], arr[mid]] = [arr[mid], arr[low]];
//         return sortColorRecursive(arr, low + 1, mid + 1, high);
//     } else if (arr[mid] === 1) {
//         return sortColorRecursive(arr, low, mid + 1, high);
//     } else {
//         [arr[mid], arr[high]] = [arr[high], arr[mid]];
//         return sortColorRecursive(arr, low, mid, high - 1);
//     }
// }

// console.log(sortColorRecursive([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
// console.log(sortColorRecursive([2, 0, 1]));         // Output: [0, 1, 2]




// Maximum Subarray | Day 29  OR Kadane’s Algorithm
// Maximum Subarray using O(n^2) approach
// function maxSubArr(arr){
//     let maxSum = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         let currSum = 0;
//         for(let j = i ; j < arr.length; j++){
//             currSum +=arr[j];
//             if(currSum > maxSum){
//                 maxSum = currSum;
//             }
//         }
//     }
//     return maxSum;
// }
// console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArr([1]))
// console.log(maxSubArr([5,4,-1,7,8]))
// // Kadane’s Algorithm (O(n))
// function maxSubArr(arr){
//     let currSum=arr[0];
//     let max=arr[0];
//     for(let i = 1; i < arr.length ; i++){
//         if((currSum +    arr[i]) > arr[i]){
//             currSum += arr[i];
//         }else{
//             currSum = arr[i];
//         }
//         max = Math.max(max,currSum);
//     }
//     return max;
// }
// console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArr([1]))
// console.log(maxSubArr([5,4,-1,7,8]))

//  Trapping Rain Water | Day 30  ******************************************************

// function trapWater(heights) {
//     let n = heights.length;
//     if (n === 0) return 0; // No heights, no water

//     let left = 0;
//     let right = n - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let trappedWater = 0;

//     while (left <= right) {
//         if (heights[left] <= heights[right]) {
//             if (heights[left] >= leftMax) {
//                 leftMax = heights[left];
//             } else {
//                 trappedWater += leftMax - heights[left];
//             }
//             left++;
//         } else {
//             if (heights[right] >= rightMax) {
//                 rightMax = heights[right];
//             } else {
//                 trappedWater += rightMax - heights[right];
//             }
//             right--;
//         }
//     }

//     return trappedWater;
// }

// console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
// console.log(trapWater([4, 2, 0, 3, 2, 4])); // 9

// function trapWater(heights) {
//     let n = heights.length;
//     let trappedWater = 0;

//     for (let i = 0; i < n; i++) {
//         let leftMax = 0, rightMax = 0;

//         // Find the maximum height to the left
//         for (let j = i; j >= 0; j--) {
//             leftMax = Math.max(leftMax, heights[j]);
//         }

//         // Find the maximum height to the right
//         for (let j = i; j < n; j++) {
//             rightMax = Math.max(rightMax, heights[j]);
//         }

//         trappedWater += Math.min(leftMax, rightMax) - heights[i];
//     }

//     return trappedWater;
// }

// console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
// console.log(trapWater([4,2,0,3,2,4])); // 9



// Find Target Indices After Sorting Array | Day 31 

// function targetIndices(arr,target){
//     let num =0;
//     let targetCount =0;
//     let result =[];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target){
//             targetCount++;
//         }else if(arr[i] < target){
//             num++;
//         }
//     }
//     console.log(num,'num');
//     for (let i = 0; i < targetCount; i++) {
        
//         result.push(num + i);
//     }
//     return result;
    

// }
// console.log(targetIndices([1,2,5,2,3],2));
// console.log(targetIndices([1,2,5,2,3],3));
// console.log(targetIndices([1,2,  5,2,3],5));

// // Time Complexity O(nlogn)
// function targetIndices(arr, target) {
//     return arr
//         .sort((a, b) => a - b)
//         .map((num, i) => (num === target ? i : -1))
//         .filter(index => index !== -1);
// }
// console.log(targetIndices([1,2,5,2,3],2));
// console.log(targetIndices([1,2,5,2,3],3));
// console.log(targetIndices([1,2,5,2,3],5));

// // Time Complexity O(nlogn)
// function targetIndices(arr, target) {
//     arr.sort((a, b) => a - b); // Step 1: Sort the array
//     let result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             result.push(i);
//         }
//     }
    
//     return result;
// }
// console.log(targetIndices([1,2,5,2,3],2));
// console.log(targetIndices([1,2,5,2,3],3));
// console.log(targetIndices([1,2,5,2,3],5));

// function targetIndicesRecursive(arr, target, smaller = 0, count = 0, index = 0) {
//     // Base Case: If index reaches the end, generate indices
//     if (index === arr.length) {
//         return Array.from({ length: count }, (_, i) => smaller + i);
//     }

//     // Count elements smaller than target
//     if (arr[index] < target) {
//         smaller++;
//     }
//     // Count occurrences of the target
//     if (arr[index] === target) {
//         count++;
//     }

//     // Recursive call
//     return targetIndicesRecursive(arr, target, smaller, count, index + 1);
// }

// // Test cases
// console.log(targetIndicesRecursive([1, 2, 5, 2, 3], 2)); // [1,2]
// console.log(targetIndicesRecursive([1, 2, 5, 2, 3], 3)); // [3]
// console.log(targetIndicesRecursive([1, 2, 5, 2, 3], 5)); // [4]



// Largest Number | Day 32 // Given a list of non negative integer // lexicographically sort 

// function largerNumber(arr){
//     for(let i = 0; i <arr.length ; i++){
//         arr[i]=arr[i] +''
//     }
//     arr.sort((a, b) => (b + a).localeCompare(a + b));
//     if (arr[0] === '0') return '0';

//     // Join sorted strings and return the result
//     return arr.join('');
    

// }
// console.log(largerNumber([10,2]))
// console.log(largerNumber([3,30,34,5,9]))
// console.log(largerNumber([2,3,31,5,9]))

// Maximum count of Positive and Negative Integer | Day 33 
// O(n) but need to O(logn)

// function maxMumCount(arr){
//     let positiveInt =0;
//     let negInt =0;
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] > 0 ){
//             positiveInt++
//         }else if(arr[i] < 0){
//             negInt++ 
//         }
//     } 

    
//     return Math.max(positiveInt, negInt);

// }


// function maxMumCount(arr) {
//     let n = arr.length;

//     // Find the first non-negative number using binary search
//     let left = 0, right = n - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] < 0) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     // `left` now points to the first non-negative number
//     let negCount = left; // All elements before `left` are negative
//     let posCount = n - left; // All elements from `left` onward are positive

//     // Return the maximum count
//     return Math.max(negCount, posCount);
// }

// console.log(maxMumCount([-2,-1,-1,1,2,3]))
// console.log(maxMumCount([-3,-2,-1,0,0,1,2]))
// console.log(maxMumCount([5,20,66,1314]))


// Plus One | Day 34

// function plusOne(arr) {
//     let n = arr.length;
//     // option for not going inside of condition 
//     if (arr[n-1] !== 9) {
//         arr[n-1] += 1;
//         return arr; 
//     }
//     arr[n-1] = 0;
//     for (let i = n - 1; i >= 0; i--) {
//         if (arr[i] !== 9) {
//             arr[i] += 1;
//             return arr; 
//         }
//         arr[i] = 0;  
//     }
    

//     let result = new Array(n + 1).fill(0);
//     result[0] = 1;
//     return result;
// }


// console.log(plusOne([1, 2, 3]));   // Output: [1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
// console.log(plusOne([9]));          // Output: [1, 0]
// console.log(plusOne([9, 9, 9])); 


// Kth Largest Element in an Array | Day 35 //Without sorting method // We have used priority Queue
// function findKthLargestElement(nums, k) {
//     for (let i = 0; i < k; i++) {
//         let maxIndex = 0;
//         for (let j = 1; j < nums.length; j++) {
//             if (nums[j] > nums[maxIndex]) {
//                 maxIndex = j;
//             }
//         }
//         if (i === k - 1) {
//             return nums[maxIndex];
//         }
//         nums[maxIndex] = -Infinity;
//     }
// }

// console.log(findKthLargestElement([3, 2, 1, 5, 6, 4], 2)); // Output: 5
// console.log(findKthLargestElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4

// function findKthLargestElement(nums, k) {
//     nums.sort((a, b) => b - a); // Sort in descending order
//     return nums[k - 1]; // Get the kth largest element
// }

// console.log(findKthLargestElement([3, 2, 1, 5, 6, 4], 2)); // Output: 5
// console.log(findKthLargestElement([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4


//  Average Salary Excluding the Minimum and Maximum Salary | Day 36

// function averageSalary(arr) {
//     if (arr.length <= 2) {
//         return 0; 
//     }

//     let maxValue = arr[0];
//     let minValue = arr[0];
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//         }
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//         }
//     }

//     sum -= (maxValue + minValue);

//     let average = sum / (arr.length - 2);
//     return average;
// }

// console.log(averageSalary([4000, 3000, 1000, 2000])); //  2500
// console.log(averageSalary([3000, 1000, 2000]));       //  2000

// // Time Complexity   O(n)
// function averageSalary(arr) {
//     const maxValue = Math.max(...arr);     
//     const minValue = Math.min(...arr);    
//     const sum = arr.reduce((acc, val) => acc + val, 0); 

//     const adjustedSum = sum - maxValue - minValue; 
//     const average = adjustedSum / (arr.length - 2); 

//     return average.toFixed(5); 
// }
// console.log(averageSalary([4000, 3000, 1000, 2000])); //  2500
// console.log(averageSalary([3000, 1000, 2000]));       //  2000

// Min Stack | Day 37 
// Time Complexity 
// push → O(1)
// pop → O(1)
// top → O(1)
// getMin → O(1)
// class MinStack {
//     constructor() {
//         this.stack = [];
//         this.minStack = [];
//     }

//     push(val) {
//         this.stack.push(val);
//         // Push to minStack if it's empty or val is smaller than the current min
//         if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//             this.minStack.push(val);
//         }
//     }

//     pop() {
//         if (this.stack.length === 0) return;
//         const popped = this.stack.pop();
//         if (popped === this.minStack[this.minStack.length - 1]) {
//             this.minStack.pop();
//         }
//     }

//     top() {
//         if (this.stack.length === 0) return null;
//         return this.stack[this.stack.length - 1];
//     }

//     getMin() {
//         if (this.minStack.length === 0) return null;
//         return this.minStack[this.minStack.length - 1];
//     }
// }

// // Example usage:
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // Returns -3
// minStack.pop();
// console.log(minStack.top());    // Returns 0
// console.log(minStack.getMin()); // Returns -2

// Implement Stack using Queues | Day 38

// Stack to maintain LIFO (Last In First Out) order

// class MyStack {
//     constructor() {
//         this.mainQueue = [];
//         this.helperQueue = [];
//     }
//     push(val) {
//         this.helperQueue.push(val);
//         while (this.mainQueue.length > 0) {
//             this.helperQueue.push(this.mainQueue.shift());
//         }
//         [this.mainQueue, this.helperQueue] = [this.helperQueue, this.mainQueue];
//     }

//     pop() {
//         return this.mainQueue.shift(); 
//     }

//     top() {
//         return this.mainQueue[0];
//     }

//     empty() {
//         return this.mainQueue.length === 0;
//     }
// }

// // Example Usage:
// const stack = new MyStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.top());   // Returns 3
// console.log(stack.pop());   // Returns 3
// console.log(stack.top());   // Returns 2
// console.log(stack.empty()); // Returns false


// Implement Queue using Stacks | Day 39
// Queue to maintain FIFO (First In First Out) order
// class MyQueue {
//     constructor() {
//         this.inStack = [];
//         this.outStack = [];
//     }

//     enqueue(val) {
//         this.inStack.push(val);
//     }

//     dequeue() {
//         if (this.outStack.length === 0) {
//             while (this.inStack.length > 0) {
//                 this.outStack.push(this.inStack.pop());
//             }
//         }
//         return this.outStack.pop();
//     }

//     front() {
//         if (this.outStack.length === 0) {
//             while (this.inStack.length > 0) {
//                 this.outStack.push(this.inStack.pop());
//             }
//         }
//         return this.outStack[this.outStack.length - 1];
//     }

//     empty() {
//         return this.inStack.length === 0 && this.outStack.length === 0;
//     }
// }

// // Example Usage:
// const queue = new MyQueue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.front());  // Returns 1
// console.log(queue.dequeue()); // Returns 1
// console.log(queue.front());  // Returns 2
// console.log(queue.empty());  // Returns false

// Longest Consecutive Sequence | Day 40

// function longestConsecutive(arr) {
//     const numSet = new Set(arr);
//     let longestStreak = 0;

//     for (let num of arr) {
//         // Check if it's the start of a sequence
//         if (!numSet.has(num - 1)) { 
//             let currentNum = num;
//             let currentStreak = 1;

//             // Count the consecutive sequence
//             while (numSet.has(currentNum + 1)) {
//                 currentNum += 1;
//                 currentStreak += 1;
//             }

//             longestStreak = Math.max(longestStreak, currentStreak);
//         }
//     }

//     return longestStreak;
// }

// // Example test cases
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (1,2,3,4)
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9 (0,1,2,3,4,5,6,7,8)

// Time Complexity: O(n log n)
// function longestConsecutive(arr) {
//     if (arr.length === 0) return 0;

//     arr.sort((a, b) => a - b); // Sort in ascending order
//     let longestStreak = 1;
//     let currentStreak = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             // Skip duplicates
//             continue;
//         } else if (arr[i] === arr[i - 1] + 1) {
//             // Consecutive number found
//             currentStreak += 1;
//         } else {
//             // Reset streak counter
//             longestStreak = Math.max(longestStreak, currentStreak);
//             currentStreak = 1;
//         }
//     }

//     // Final update after loop
//     return Math.max(longestStreak, currentStreak);
// }

// // Example test cases
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 (1,2,3,4)
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9 (0,1,2,3,4,5,6,7,8)



// Find the Duplicate Number | Day 41
// Time Complexity: O(n log n) 
// function findDuplicate(arr) {
//     arr.sort((a, b) => a - b);
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             return arr[i];
//         }
//     }
//     return -1; 
// }

// console.log(findDuplicate([1, 4, 3, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 34, 2]));   // Output: -1 (No duplicate)

// // // Using HashSet (O(n))
// function findDuplicate(arr) {
//     let seen = new Set();
//     for (let num of arr) {
//         if (seen.has(num)) {
//             return num;
//         }
//         seen.add(num);
//     }
//     return -1; // If no duplicate found
// }

// console.log(findDuplicate([1, 4, 3, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 34, 2]));   // Output: -1 (No duplicate)

// Floyd’s Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1) 
// function findDuplicate(arr) {
//     let slow = arr[0];
//     let fast = arr[0];

//     // Step 1: Detect cycle (Use a regular while loop)
//     while (true) {
//         slow = arr[slow];       
//         fast = arr[arr[fast]];  

//         if (slow === fast) break; // Break when cycle is found
//     }

//     // Step 2: Find the duplicate number (Cycle start)
//     slow = arr[0]; 
//     while (slow !== fast) {
//         slow = arr[slow];
//         fast = arr[fast];
//     }

//     return slow; 
// }

// console.log(findDuplicate([1, 4, 3, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3

// function findDuplicate(arr) {
//     let ans = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         let ele = Math.abs(arr[i]); 
        
//         if (arr[ele] > 0) {
//             arr[ele] = -arr[ele]; 
//         } else {
//             ans = ele; 
//             break;
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.abs(arr[i]);
//     }

//     return ans; 
// }

// console.log(findDuplicate([1, 4, 3, 2, 2])); // Output: 2
// console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3

// Last Stone Weight 
// Time complexity (nLogn)
class LastStoneWeightSorter {
    constructor(stones) {
      this.stones = stones;
    }
    smashStones() {
      while (this.stones.length > 1) {
        this.stones.sort((a, b) => b - a); 
        let stone1 = this.stones.shift(); 
        let stone2 = this.stones.shift(); 
        if (stone1 !== stone2) {
          this.stones.push(stone1 - stone2);
        }
      }
    }
    getLastStoneWeight() {
      return this.stones.length === 0 ? 0 : this.stones[0];
    }
    solve() {
      this.smashStones();
      return this.getLastStoneWeight();
    }
  }
  const sorterSolver = new LastStoneWeightSorter([2,7,4,1,8,1]);
  console.log(sorterSolver.solve()); // Output: 1

// Pivot Index
// Time Complexity O(n)
function pivotIndex(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; 
        }
        leftSum += nums[i]; 
    }

    return -1;
};

// Example usage:
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0

  



