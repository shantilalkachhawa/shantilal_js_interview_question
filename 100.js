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

// function fibonacciNumber(n){
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