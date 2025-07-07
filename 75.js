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

// function numIdenticalPairs(arr){
//     let count =0 ;
//     let freq ={};
//     for(let i = 0; i < arr.length ; i ++){
//         let char = arr[i];
//         if(freq[char]){
//             count +=freq[char];
//             freq[char]++;
//         }else{
//             freq[char] =1;
//         }
 
//     }
//     return {freq,count}
    
// }
// console.log(numIdenticalPairs([1,2,3,1,3,1]))

//4 Pascal's Triangle
function tringle(n){
    let tringle =[];
    for(let i =0 ; i < n ; i ++){
        let res = [];
        for(let j = 0; j <=i; j ++){
             // First and last elements are always 1
            if(j === 0 || j === i){
                res.push(1);
            }else{
              // Sum of the two numbers directly above
               res.push(tringle[i-1][j-1] + tringle[i - 1][j]) 
            }
            
        }
         tringle.push(res);
        
    }
    return  tringle; 
}
console.log(tringle(6))
[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


//5 Maximum Subarray
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;   
};
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6

//6 Best Time to Buy and Sell Stock
// function maxProfit(prices) {
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
// console.log(maxProfit([7,1,5,3,6,4])); // Output: 5 (Buy at 1, sell at 6)
// console.log(maxProfit([7,6,4,3,1]));   // Output: 0 (No profit possible)


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

//10 Valid Anagram

// function validAnagram(s,t){
//    let fst= s.split('').sort().join('');
//   let lst= t.split('').sort().join('');
//    if(fst == lst){
//        return true
//    }
//    return false;
    
// }
// s = "anagram", t = "nagaram"
// console.log(validAnagram(s,t))

// function validAnagram(s,t){
//     if(s.length != t.length){
//         return false;
//     }
//  let count = {};
//  for(let i = 0 ; i < s.length ; i ++){
//     let char = s[i];
//     count[char]= (count[char] || 0) +1;
//  }
//  for(let j = 0; j < t.length ; j++){
//     let char = t[j];
//     if(!count[char]){
//         return false;
//     }
//  }
//  return true
// }
// // 11 Repeated String Match
// function repetedString(a,b){
//     let repeat =a;
//     let count = 1;
//     while(repeat.length < b.length){
//         repeat+=a;
//         count ++;
//     }
//     if(repeat.includes(b))return count;
//     repeat+= a;
//     count ++;
    
//     if(repeat.includes(b))return count;
//     return -1;
 
// }
// console.log(repetedString('abcd','cdabcdab'))

// 12 Roman to Integer
// function romanToInt(str){
    
//     let romanValues={
//         I: 1, V: 5, X: 10,
//     L: 50, C: 100,
//     D: 500, M: 1000
//     }
//     let toatal =0 ;
    
//     for(let i = 0; i < str.length; i ++){
//         const curr = romanValues[str[i]];
//         const next = romanValues[str[i+1]];
//         if(next > curr){
//             toatal += (next -curr);
//             i ++;
//         }else{
//             toatal += curr;
//         }
//     }
//     return toatal;
    
// }
// console.log(romanToInt("III"));     // 3 
// console.log(romanToInt("IV"));      // 4
// console.log(romanToInt("IX"));      // 9
// console.log(romanToInt("LVIII"));   // 58
// console.log(romanToInt("MCMXCIV")); // 1994

//13 Subsets II

// function subsetsWithDup(nums) {
//     nums.sort();  // Sort to handle duplicates
//     let result = [];
    
//     function backtrack(start, path) {
//         result.push([...path]);

//         for (let i = start; i < nums.length; i++) {
//             // Skip duplicates
//             if (i > start && nums[i] === nums[i - 1]) continue;

//             path.push(nums[i]);
//             backtrack(i + 1, path);
//             path.pop();
//         }
//     }

//     backtrack(0, []);
//     return result;
// }

// console.log(subsetsWithDup([1, 2, 2]));



// Subset 
// function subSet(arr){
//     let result =[[]];
//     for(let i = 0 ; i < arr.length ; i ++){
//         let n = result.length;
//         for(let j = 0 ; j < n; j ++){
//             let temp = [...result[j],arr[i]];
                //  let newSubset = result[j].slice(); // make a copy
                // newSubset.push(arr[i]); 
//             result.push(temp);
//         }
//     }
//     return result;
// }
// console.log(subSet([1,2,3]))

// function subSet(num) {
//     let result = [];
//     getSubSet(0, num, [], result);
//     return result;

//     function getSubSet(ind, num, currArr, result) {
//         result.push([...currArr]); // Push a copy of current subset
//         for (let i = ind; i < num.length; i++) {
//             currArr.push(num[i]);                    // Choose
//             getSubSet(i + 1, num, currArr, result);  // Explore
//             currArr.pop();                           // Un-choose (backtrack)
//         }
//     }
// }

// console.log(subSet([1, 2, 3]));
// Combination
// function combition(n,k){
//     let subSet = [];
//     recursion(1,n,k,[],subSet);
//     return subSet;
//     function recursion(start,n,k,currArr,subSet){
//         if(currArr.length === k){
//            subSet.push([...currArr]);
//         return;
//         }
//         for(let i = start; i <= n ; i ++){
//             currArr.push(i);
//             recursion(i+1,n,k,currArr,subSet);
//             currArr.pop()
//         }
//     }
// }
// console.log(combition(5,2)) // Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

// Combination Sum III

// function combinationSum(k,n){
//     let subSet =[];
//     genrateCombin(1,9,[],subSet,k,n);
//     return subSet;
//     function genrateCombin(ind,end,currArr,subSet,k,target){
//         if(currArr.length == k && target === 0){
//         subSet.push([...currArr]);
//         return ;
//         }
//         for(let i = ind ; i <= end ; i++ ){
//             currArr.push(i);
//             genrateCombin(i+1,end,currArr,subSet,k ,target-i)
//             currArr.pop();
//         }
//     }
    
// }
// console.log(combinationSum(3,9)) // [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]
// Combination Sum II

// function combinationSum(arr,k){
//     let subSet =[];
//     arr.sort((a, b) => a - b); 
//     getSubset(0,arr,[],subSet,k)
//     return subSet;
    
//     function getSubset(start,arr,currArr,subSet,target){
//         if( target === 0){
//         subSet.push([...currArr]);
//         return;
//         }
//         if(target < 0 ) return;
//         for(let i = start; i < arr.length ; i++){
//             // skip duplication
//             if (i > start && arr[i] === arr[i - 1]) continue;
//             currArr.push(arr[i]);
//             getSubset(i+1,arr,currArr,subSet,target-arr[i]);
//             currArr.pop();
//         }
//     }
// }
// console.log(combinationSum([10,1,2,7,6,1,5],8)) // [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]

// Combination Sum 
// function combination(arr,k){
//     let subSet =[];
//     getCombination(0,[],subSet,arr,k)
//     return subSet;
//     function getCombination(start,currArr,subSet,arr,target){
//         if( target === 0){
//             subSet.push([...currArr]);
//             return ;
//         }
//         if(target < 0){
//             return ;
//         }

//         for(let i = start; i < arr.length ; i++){
//             currArr.push(arr[i]);
//             getCombination(i,currArr,subSet,arr,target - arr[i]);
//             currArr.pop()
//         }
        
//     }

// }
// console.log(combination([2,3,6,7],7)) //[ [ 2, 2, 3 ], [ 7 ] ]

// function subString(str) {
//     let result = [];

//     function subSet(str, ind, currStr) {
//         result.push(currStr.join("")); // Convert character array to string

//         for (let i = ind; i < str.length; i++) {
//             currStr.push(str[i]);
//             subSet(str, i + 1, currStr);
//             currStr.pop(); // backtrack
//         }
//     }

//     subSet(str, 0, []);
//     return result;
// }

// console.log(subString('abc')); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']




// Permutation
// function permutation(str){
//     let result =[];
//     helper(str,'')
//     return result;
//     function helper(str,res){
//         if(str.length ===0){
//             result.push(res)
//         }
//         for(let i=0; i <str.length; i ++){
//             let curStr = str[i];
//             let subStr = str.substring(0,i) + str.substring(i+1);
//             helper(subStr,res+curStr)
            
//         }
        
//     }
// }
// console.log(permutation('abc','')) //[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// function permutaion(arr){;
//     let result = [];
//     helper(arr,[])
//     return result;
//     function helper(arr, currArr) {
//         if (arr.length === 0) {
//             result.push([...currArr]);
//             return;
//         }

//         for (let i = 0; i < arr.length; i++) {
//             let cur = arr[i];
//             let subArr = arr.slice(0, i).concat(arr.slice(i + 1));

//             currArr.push(cur);        
//             helper(subArr, currArr);   
//             currArr.pop();             
//         }
//     }
    
// }
// console.log(permutaion([1,2,3])) //[ [ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ]]
// Permutation 2

//14 Palindrome Partitioning
//15 Combination Sum II
//16 Power of Two
//17 Different Ways to Add Parentheses
//18 Sudoku Solver
//19 Reverse Linked List
//20 Middle of the Linked List
//21 Merge Two Sorted Lists



// const input =[
//     {name:'A',age:20,city:'BLR'},
//     {name:'A',age:20,city:'DEL'},
//     {name:'A',age:20,city:'BLR'},
//     ]
    
// function group(arr){
//     let result = {};
    
//     for(let i =0 ; i < arr.length ; i ++){
//         let currObj = arr[i];
//         let checkCity =currObj.city; 
//         if(result[checkCity]){
//             result[checkCity].push(currObj);
//         }else{
//             result[checkCity] = [currObj]
//         }
//     }
    
//     return result;
// }
// console.log(group(input))