// //1 Concatenation of Array
// function getConcatenation(nums) {
//     let n= nums.length;
//     for(let i = 0 ; i < n ; i ++){
//         nums[n+i] =nums[i]
//         // nums.push(nums[i]);

//     }
//     return nums
// };
// console.log(getConcatenation([1,2,3]));

//2 Shuffle the Array
// function shuffle(nums,k) {
//         let result =[]
//         for(let i=0; i < k; i++){
//             result.push(nums[i]);
//             result.push(nums[i+k]);
//         }
//         return result;

// }
// console.log(shuffle([2,5,1,3,4,7],3))
 
//3 Number of Good Pairs
// function numIdenticalPairs(nums) {
//     let count = 0;
//     for(let i = 0 ; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 count ++;
//             }
//         }
//     }
//     return count
    
// };
// console.log(numIdenticalPairs([1,2,3,1,1,3]))
// console.log(numIdenticalPairs([[1,1,1,1]]))

//4 Pascal's Triangle
// function tringle(n){
//     let tringle =[];
//     for(let i =0 ; i < n ; i ++){
//         let res = [];
//         for(let j = 0; j <=i; j ++){
//              // First and last elements are always 1
//             if(j === 0 || j === i){
//                 res.push(1);
//             }else{
//               // Sum of the two numbers directly above
//                res.push(tringle[i-1][j-1] + tringle[i - 1][j]) 
//             }
            
//         }
//          tringle.push(res);
        
//     }
//     return  tringle; 
// }
// console.log(tringle(6))
// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


//5 Maximum Subarray
// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]);
//         maxSum = Math.max(maxSum, currentSum)
//     }
//     return maxSum;   
// };

//6 Best Time to Buy and Sell Stock
// function maxProfit(prices: number[]): number {
//     let minPrice= prices[0];
//     let maxProfit = 0;
//     for(let i =1 ; i < prices.length; i++){
//         if(prices[i] < minPrice){
//             minPrice = prices[i];
//         }else{
//             maxProfit = Math.max(maxProfit,prices[i] - minPrice )
//         }
//     }
//     return maxProfit;

    
// };
// prices = [7,1,5,3,6,4]

//7 Reverse Words in a String
// function reversStr(str){
//     return str.split(' ').reverse().join(' ')

// }
// console.log(reversStr("the sky is blue"))

// function reversStr(str){
//     let result= '';
//     let word = '';
// for(let i = str.length - 1; i >= 0; i --){
//     if(str[i] !=' '){
//         word = str[i] + word;
//     }else{
//         if(word.length > 0){
//         result += word + ' ';
//         word= '';
//         }
//     }
    
// } 
//    if(word.length > 0){
//         result += word ;
//         }
//     console.log(result)
// }
// console.log(reversStr("the sky is blue"))

//8 Longest Palindromic Substring
// function longPalindromic(str){
//     let length =0;
//     let result = '';
//     for(let i = 0; i < str.length ; i ++){
//         for(let j =1 ; j <= str.length; j ++){
//             let subStr = str.substring(i,j);
//             let revStr = subStr.split('').reverse().join('');
//             if(subStr === revStr){
//                 length = length > subStr.length ? length : subStr.length;
//                 result = length > subStr.length ? result : subStr;
//             }
//         }
//     }
//     return result;
// }
// console.log(longPalindromic('aaba'))

//9 Longest Common Prefix
// function longPrefix(arr){
//   console.log(arr.sort())
//   let first = arr[0];
//   let last= arr[arr.length - 1];
//   let i = 0;
//   while(i < first.length && first[i] === last[i]){
//       i++;
//   }
//   return first.slice(0,i);
// }
// const a = ["flower","flow","floght"]
// console.log(longPrefix(a))