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

// 5- water bottle giver num of bottle and exchagebottle

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
//             if(arr[i]+arr[j  ] === value){
//                 return [i,j];
//             }
//         }
//     }
// }
// const arr =[2,4,5,1,7]
// console.log(twoSum(arr,11))

// 6 Add to Array form of integer
// function addArrayToInteger(arr,k){
//     let pointer = arr.length;
//     let carry =  0;

//     while( pointer > 0 || k > 0){
//         let  lastDigit = k % 10
//         let remDigit = Math.floor(k/10);


//     }


// }
// console.log(addArrayToInteger([1,2,4,5],999))
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
//     return result;


// }
// const arr1 =[1,3,5,6,7,8]
// const arr2 =[2,4,7,9]
// console.log(mergeSortedArr(arr1,arr2))