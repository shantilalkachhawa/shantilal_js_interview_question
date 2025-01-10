// 1- Palindrome 
// function palindromic(n){
//     if(n<0){
//         return false;
//     }
//     let original = n; // Store the original number for comparison.
//     let reversed = 0;
//     while(n > 0){
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }
//     return original === reversed;
// }
// console.log(palindromic(121))
// console.log(palindromic(-121))
// console.log(palindromic(123))

// 2-Power of two -
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
// console.log(powerOfTwo(20))
// console.log(powerOfTwo(16))
// console.log(powerOfTwo(10))

//3 function fibonacciNumber(n){
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
function largestTwiseofOther(arr){
    let n = arr.length;
    let largestNum=-1;
    let secondMax =-1
    for(let i=0 ; i < n; i++){
        if(arr[i] > largestNum){
            secondMax = largestNum;
            largestNum = arr[i];
        }else if(arr[i] > secondMax){
            secondMax = arr[i]
        }

    }
     let checkTwise = secondMax *2
     if(checkTwise <= largestNum){
        return true;
     }else{
        return false;
     }
    

}
console.log(largestTwiseofOther([3,6,1,0]));
console.log(largestTwiseofOther([1,2,3,4]));
