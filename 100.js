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
// console.log(twoSum(arr,11))

// 6 Add to Array form of integer
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
// function addTwoProduct(arr){
//     let firstMax=-1;
//     let secondMax=-1;
//     for(let i = 0; i < arr.length; i++){
    // if (arr[i] > firstMax) {
    //     // Update secondMax before changing firstMax
    //     secondMax = firstMax;
    //     firstMax = arr[i];
    // } else if (arr[i] > secondMax) {
    //     // Update secondMax if current value is less than firstMax but greater than secondMax
    //     secondMax = arr[i];
    // }
//     }
//     console.log(firstMax,secondMax)
//     let result = 0;
//     result = ((firstMax- 1)* (secondMax - 1));
//     return result;
// }
// console.log(addTwoProduct([2,3,4,5]))
// console.log(addTwoProduct([2,3,4,7,6,5]))

// 7- Merge two shortest list
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
// const arr1 =[1,3,5,6,7,8]
// const arr2 =[2,4,7,9]
// console.log(mergeSortedArr(arr1,arr2))

// Day 9 Meadian of two shorted Arrays
// console.log(mergeSortedArr([1,3],[2]));
// console.log(mergeSortedArr([1,3],[2,4]));

// Day 10  Missing Number of Arrays (0,n)

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
// // n number of sum and array of sum subtract then outcome will get missing number
// // subtracting the sum of the array from the expected sum of the first n natural numbers.
// console.log(missNumber([3,0,1]));//Range [0,3]
// console.log(missNumber([0,1]));//Range[0,2]
// console.log(missNumber([9,6,4,2,3,5,7,0,1]));//Range [0 ,9]

// Day 11  Remove the  Number of Arrays

// function removeTheNumberOfArrays(arr,k){
//     let pointer =0;
//     let outcome = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]!= k){
//             console.log(arr[i]);
            
//             arr[pointer]= arr[i];
//         }else{
//             outcome ++;
//         }
//     }
//     return outcome;
// }
// console.log(removeTheNumberOfArrays([3,2,2,3],3));//[2,2,-,-]
// console.log(removeTheNumberOfArrays([0,1,2,2,3,0,4,2],2))//[0,1,3,0,4,-,-,-]

// Day 12  Square of the  Sorted Arrays o(n) not use nlogn
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
// console.log(SquareOfArray([-7,-4,3,0,1,2]));
// console.log(SquareOfArray([-7,-3,2,3,11]));
// console.log(SquareOfArray([4,-1,0,3,10]));

// Day 14  Two sum 2   // Hamesha sorted array ki value increse j hoti index increse hone par
// Optimise solution
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
// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,3,4],6));







// Bulb swicher 
// 15 Largest number at least of twise of other 
// function largestTwiseofOther(arr){
//     let n = arr.length;
//     let largestNum=-1;
//     let secondMax =-1
//     for(let i=0 ; i < n; i++){
//         if(arr[i] > largestNum){
//             secondMax = largestNum;
//             largestNum = arr[i];
//         }else if(arr[i] > secondMax){
//             secondMax = arr[i]
//         }

//     }
//      let checkTwise = secondMax *2
//      if(checkTwise <= largestNum){
//         return true;
//      }else{
//         return false;
//      }
    

// }
// console.log(largestTwiseofOther([3,6,1,0]));
// console.log(largestTwiseofOther([1,2,3,4]));

// 16 Container with most water

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



// Increasing Triplet Subsequence|
// 0(n3) time complexicity
// function increTripletSub(arr){

//     for(let i=0; i < arr.length; i ++){
//         for(let j=i+1; j < arr.length; j++){
//             for(let k=j+1; k < arr.length ; k++){
//                 if( arr[i]< arr[j] && arr[j] < arr[k]){
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;

// }

// 0(n)
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
//     function increTripletSub(arr){
//         let frstIndx = Infinity; //Max value 
//         let scndIndx =Infinity;
//         let trdIndx = Infinity;
//         for(let i=0 ; i < arr.length; i ++){
//                let ele = arr[i];
//                if(frstIndx >= ele){
//                 frstIndx = ele;
//                }else if(scndIndx >= ele){
//                 scndIndx = ele;
//                }else{
//                 trdIndx =ele;
//                 return true;
//                }
//         }
//         return false;
//         }
// console.log(increTripletSub([1,2,3,4,5]));
// console.log(increTripletSub([5,4,3,2,1]));
// console.log(increTripletSub([2,1,5,0,4,6]));



// Maximum Ascending Subarray Sum| Day19  

// function maxAscendingSubarray(arr){
//     let currSum = arr[0];
//     let maxSum = arr[0];
//     for(let i =1; i < arr.length; i++){
//         if (arr[i] > arr[i - 1]) {
//             currSum += arr[i];
//         } else {
//             currSum = arr[i];
//         }
//         maxSum = Math.max(maxSum, currSum);
//     }
//     return maxSum;
// }
// console.log(maxAscendingSubarray([10,20,30,5,10,50]))
// console.log(maxAscendingSubarray([10,20,30,40,50]))
// console.log(maxAscendingSubarray([10,20,30,5,10,50]))


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
//     // Check for lucky integers
//     for (let num in numCount) {
//         if (parseInt(num) === numCount[num]) {
//             luckyInt = Math.max(luckyInt, parseInt(num)); // Update to the largest lucky integer
//         }
//     }
//     return luckyInt;
// }
// console.log(luckyInteger([2, 2, 3, 4])); // Output: 2
// console.log(luckyInteger([1, 2, 2, 3, 3, 3])); // Output: 3
// console.log(luckyInteger([2, 2, 2, 3, 3])); // Output: -1



// Binary search two wordd like sorted and l  Day21
// Binary search time comlexity is logN

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


// FInd the first and last postion on element in Sorted  Day22

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

// // Test Cases
// console.log(findElement([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
// console.log(findElement([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
// console.log(findElement([], 0));                  // Output: [-1, -1]

// Search in Rotated Sorted Array   Day23

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

// Find minmum in Rotated Sorted Array   Day24
// function findMinValue(arr) {
//     if (arr.length === 1) {
//         return arr[0]; // Single element array
//     }
//     // If the array is already sorted
//     if (arr[0] < arr[arr.length - 1]) {
//         return arr[0];
//     }
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//         let mid = Math.floor((start + end) / 2);

//         // If mid element is greater than end, minimum is in the right half
//         if (arr[mid] > arr[end]) {
//             start = mid + 1;
//         } else {
//             // Otherwise, it's in the left half
//             end = mid;
//         }
//     }

//     // At this point, start points to the minimum element
//     return arr[start];
// }

// // Test Cases
// console.log(findMinValue([3, 4, 5, 1, 2])); // Output: 1
// console.log(findMinValue([4, 5, 6, 7, 0, 1, 2])); // Output: 0
// console.log(findMinValue([11, 13, 15, 17])); // Output: 11


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
//     return arr[start]; // At this point, start will hold the minimum value.
// }
// console.log(findMinValue([3,4,5,1,2]));
// console.log(findMinValue([4,5,6,7,0,1,2]));


// Find Peak Element | Day 25  right and left side both side greter value

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
// console.log(searchInserationPosition([1,3,5,6],5));
// console.log(searchInserationPosition([1,3,5,6],2));// if not avialable else available which postion
// console.log(searchInserationPosition([1,3,5,6],7)); // if not avialable else available which postion

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

//  Sort Colors | Day 28 // dutch national flag //red ,blue,white 

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
// Maximum Subarray using optomise approach
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
// console.log(targetIndices([1,2,5,2,3],5));


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

function maxMumCount(arr){
    let positiveInt =0;
    let negInt =0;
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0 ){
            positiveInt++
        }else if(arr[i] < 0){
            negInt++ 
        }
    } 

    
    return Math.max(positiveInt, negInt);

}


function maxMumCount(arr) {
    let n = arr.length;

    // Find the first non-negative number using binary search
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // `left` now points to the first non-negative number
    let negCount = left; // All elements before `left` are negative
    let posCount = n - left; // All elements from `left` onward are positive

    // Return the maximum count
    return Math.max(negCount, posCount);
}

console.log(maxMumCount([-2,-1,-1,1,2,3]))
console.log(maxMumCount([-3,-2,-1,0,0,1,2]))
console.log(maxMumCount([5,20,66,1314]))
