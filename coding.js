//Create BY Shantilal kachhawa-------JS-------//



// My name is Shantilal Kachhawa, and I have over 3 years of experience in Frontend development. I have worked on a variety of projects across different domains and have strong skills in React, Angular, Redux, TypeScript, JavaScript, and responsive design.


// in famihives
// - Famehives is a family organization management web app. 
// - Users can signup/signin and add their family memebers.
// - Users can visualize their family in a tree structure
// - I have built a custom solution to make family tree, and developed my own npm package and published it.
// - I have also developed a customer management portal for the system, where admin can see some analytics like users information, 
//   control master content, add/update terms & condition / policy
// preserve your family history with our family tree management
// Implemented push notification while using one signal and real-time chat with socket,
// manage RBAC role-based access control user ,
// added switch laguage functionality ,
// also create user management portal ,


// Public JOb
// In this project, users can view jobs based on their role and easily apply for those positions through the web application.
//  Additionally, ATS (Applicant Tracking System) features are implemented to manage the hiring process. For example, if a job requires 1 or 2 candidates but receives multiple resumes, AI is used to compare the resumes with the job description (JD).
//  The system then returns a resume score, highlighting both the candidate's strong and weak areas, aiding in the decision-making process.







//Js Interview Question
// 1 accenture
// 'use strict'
//  {
//     function output(){
//         return 'is ruturn'
//     }
//  }

//  output()
//  console.log(output());
//  yes called the function cuz this is fuctional scope but when use use-strict then fun are converted to block scope.


//2 spotify

// function output(a,b){
//     return 'output length is'

// }
// function output1(a,b=0,c){
//     return 'output1 length is'

// }
// function output2(a,b=0,...rest){
//     return 'output2 length is'

// }
// function output3(a,b,...rest){
//     return 'output3 length is'

// }
// console.log(output.length,'output');
// console.log(output1.length,'output1');
// console.log(output2.length,'output2');
// console.log(output3.length,'output3');


// 3 OLX

// function result(){
//     this.name = 'shanti'
//     return this
// }


// const result = ()=>{
//     this.name = 'shanti'
// return this 
// }

// const output =new result()
// console.log(output);
// Normal fun are return value but arraow fun are return error is constructor cuz arrow not supprot this key word.



// 5 array 
// var output = [1,2,3];
// output[6]=10

// console.log(output);
// [ 1, 2, 3, <3 empty items>, 10 ] o/p is create are empty item space


// 5 array 
// var output = [1,2,3];
// output[6]=10

// console.log(output);
// [ 1, 2, 3, <3 empty items>, 10 ] o/p is create are empty item space


// customs slider 
// var array =['s','h','a','n']
// let lenght = array.length
// var index = 0;

// function slider(){
//     console.log(array[index]);
//     index = (index + 1)% lenght;
// }
// setInterval(slider,1000)

// 
// function show(a){

//     console.log(a);
//     if(a >0){
//         show(a-1);
//     }
//     console.log(a);
// }
// show(5)

// 
// let a= [1,2,3,4,5];
// a[a.length-1]++;

// console.log(a);
// [1,2,3,4,6]

// conver to the number 
// " 33"=>33
// " 33aaa"=>NaN
// true=>1
// fasle=>0
// null=>0
// undefind=>Nan


// convert boolean 
// 1=>true
// 0=>fasle
// ""=>false
// "sda"=>true


// conver string
// 66=>string

// --------- Operations --------

// console.log(null > 0) false
// console.log(null == 0) false
// console.log(null >= 0) true ( null convert to the 0)

// cosole.log( undefined == 0) false;
// 

// --------- data type
// undifined => undifined
// null => Object
// Boolean => Boolean
// Number => Number
// ------- stack( Primative ) Heap(Non-primative)---------

//  let  firstName = "shanti"
//  let  lastName = firstName
// lastName = "lal"
//  console.log(firstName) o/p shanti ( No changes or change only create first copy of the variavle then changed not changed orignal value  )
//  console.log(lastName) o/p lal

// Heap 
// let firstObj ={
//     user:'nane',
//     email:'a@mail'
// }

// let secondObj =firstObj
// secondObj.user="tala"

// console.log(firstObj.user);
// console.log(secondObj.user);
// Both are same because reference are same 




// bubbleSort4
//  console(false == [])
// [] convert to '' string && " " convert to 0 then false also 0


// ify function is  ()();  two moon bracates

// comparisong propertie Object.is()

// console.log(0===0)
// console.log(0==0)
// console.log(Object.is(-0,0))


// how to add two var  without using any funtion
// const a= 10;
// const b= 20;

// const result = new Function('a','b',console.log(a+b))

// switch statement follow only === operatoer

// how to error throw without passing value

// function error(){
//     throw new error('')
// }

// function show(name=error()){

// }
// show()

// return last value of array

// const a=[1,2,3,4,5,6]
// console.log(a.at(-1))

//  how to clear timeer
// let val= 0;

// let id = setInterval(function(){
//     console.log(val++)
    
//     if(val > 3){
//         clearInterval(id)
//     }
    
// },100)

// const fullName= "shanti lal kachhawa"

// const charcCount={};

// for(let a of fullName){
    
//     if(charcCount[a]){
//         charcCount[a]+=+1;
//     }else{
//         charcCount[a]=1
//     }
// }
// console.log(charcCount)
// function reverseName(name){
//     const charCount={};
//     for(let char of name){
//          if(/^[a-z]$/.test(char)){
//             charCount[char]= (charCount[char]||0) + 1; 
//          }
//     }
//     return charCount;
// }

// // { s: 1, h: 3, a: 5, .... }
// let fullName= "shantlal kachhawa";
// console.log(reverseName(fullName))

// function isBubleShort(Arr){
//     let n = Arr.length
// for(let i=0; i < n ;i++){
//     for(let j=0; j < n-1-i ; j++){
//         if(Arr[j] > Arr[j+1]){
//             // console.log(Arr[j]);
//             var temp  = Arr[j];
//             Arr[j]= Arr[j+1];
//             Arr[j+1]=temp;
//         }
//     }
// }
// return Arr;
// }
// let array=[0,1,0,1,2,0,1,1,0,2]
// console.log(isBubleShort(array))


// reverse array 

//  function reverseArray(Arr){
//     let n = Arr.length
//     for(let i=0; i< n/2; i++ ){
//         var temp  = Arr[i] ;
//         Arr[i]=Arr[n-i-1];
//         Arr[n-i-1]=temp;
//     }

//     // return Arr;
//  }
//  const array = [1,2,3,4,5,6,7]
//  reverseArray(array)
//  console.log(array)

// is palendrome number

    // function isPalindrome(arr){

    //     let cleanStr= arr.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    //     for(let i=0, j = cleanStr.length - 1; i < j; i++,j--){
    //         if(cleanStr[i] !== cleanStr[j]){
    //             return false;
    //         }
    //     }
    //     return true;
    // }


// console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true
// console.log(isPalindrome("Hello, World!"));


// Binary search assendiing order (sorted array)
// Binary search Dessending order (sorted array)
// Order agnostin search (order unkown)


// **First and Last occurrence of an Element

// function isFirstLastOccurence(array,k){
//     let low=0;
//     let high=array.length-1;
//     let res=-1;
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2);
//         // let mid =low+(high-low)/2;

//         if(array[mid]==k){
//             res=mid;
//              high = mid-1; // when first occurence 
//             //low = mid+1;  // when last occurence
//         }
//         else if(array[mid] > k){
//             high=mid-1;
//         }else {
//             low=mid+1;
//         }
//     }
//     return res;
// }

// let array=[1,2,10,10,10,10,12,16]
// find=10;

// console.log(isFirstLastOccurence(array,find))


// Count of an Element in a Sorted Array
// let array = [1,2,10,10,10,4,5]

// function countOccurence(){
//     return isLast - isFirst +1
// }


// Number of Times a Sorted array is Rotated

// const rotatedSrtArray = [11, 12, 15, 18, 2, 5, 6, 8];

// console.log(findRotationCount(rotatedSrtArray));

// function findRotationCount(array) {
//     let low = 0;
//     let high = array.length - 1;

//     while (low <= high) {
//         // If the array is already sorted, the rotation count is 0
//         if (array[low] <= array[high]) {
//             return low;
//         }

//         let mid = Math.floor((low + high) / 2);
//         let next = (mid + 1) % array.length;
//         let prev = (mid + array.length - 1) % array.length;

//         // Check if mid is the rotation point
//         if (array[mid] <= array[next] && array[mid] <= array[prev]) {
//             return mid;
//         }

//         // If the left half is sorted, the rotation point is in the right half
//         if (array[low] <= array[mid]) {
//             low = mid + 1;
//         }
//         // If the right half is sorted, the rotation point is in the left half
//         else {
//             high = mid - 1;
//         }
//     }

//     return -1; // Array is not rotated
// }


// find index of minmm value in sortd array that is answer  




// Find an Element in a Rotated Sorted Array
// const rotatedSrtArray=[11,12,15,18,2,5,6,8]
// const SortedArray=[1,2,3,4,5,6,7,8,9]
// const high=SortedArray.length;
// console.log(recursionBinarySearch(SortedArray,0,high,8))

// function recursionBinarySearch(array,low,high,ele){
//         while(low <= high){
//             let mid = Math.floor((low+ high)/2);
//             if(array[mid]===ele){
//                 return mid;
//             }else if( array[mid]> ele){
//                 return recursionBinarySearch(array,low,mid-1,ele)
//                 //  high = mid-1;
//             }else{
//                 return recursionBinarySearch(array,mid+1,high,ele)
//                 //  low = mid+1
//             }
//         }
//     return -1
//     }
// const SortedArray=[1,2,3,4,5,6,7,8,9]
// const high=SortedArray.length;

// console.log(binarySearch(SortedArray,0,high,8))


// function binarySearch(array,low,high,ele){
//     while(low <= high){
//         let mid = Math.floor((low+ high)/2);
//         console.log(mid,'mid')
//         if(array[mid]===ele){
//             return mid;
//         }else if( array[mid]> ele){
//              high = mid-1;
//         }else{
//              low = mid+1
//         }
//     }
// return -1
// }





// factorial in number

// function isFactorial(num){

//     if(num<=1) return 1;
//     return num * isFactorial(num-1);

// }

// console.log(isFactorial(4),'fa')



// function remooveDuplicate(array){
//     let n = array.length
    
//   let newArray =[];
//    for( let i = 0; i < n; i++ ){
//  let isDuplicate = false;
//        for(j=0; j < newArray.length ; j++){
//            if(array[i]=== newArray[j]){
//                isDuplicate=true;
//                break;
//            }
          
//        }
//         if(!isDuplicate){
//                newArray.push(array[i]);
//            }
//    }
//    return newArray;
// }
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// console.log(remooveDuplicate(arrayWithDuplicates))

// image rotation

// const originalMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

// console.log(imageRotation(originalMatrix))
//   function imageRotation(matrix){
//     const row = matrix.length
//     const colum =matrix[0].length
//     for(let i=0; i<row; i++){
//         for(let j=0;j<=i; j++){
//             let temp= matrix[i][j];
//             matrix[i][j]= matrix[j][i]
//             matrix[j][i]=temp
//         }
//     }
//     return matrix;

//   }


// function longestSubstringWithoutRepeating(array) {
//     let n = array.length;
//     let maxLength = 0;
//     let start = 0;
//     let bestStart = 0;
//     let charIndex = {};
//     for (let end = 0; end < n; end++) {
//       let currentChar = array[end];
//     //   console.log(currentChar,'currentChar')
//       if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= start) {
//         // If the character is already in the substring, update the start index
//         start = charIndex[currentChar] + 1;
//       }
//       // Update the character index in the map
//       charIndex[currentChar] = end;
//       // Update the maximum length of the substring and the best starting index
//       if (end - start + 1 > maxLength) {
//         maxLength = end - start + 1;
//         bestStart = start;
//       }
//     }
//     // Return the longest substring without repeating characters
//     return array.substr(bestStart, maxLength);
//   }
//   Example usage:
//   const input1 = "GEEKSFORGEEKS";
//   console.log(longestSubstringWithoutRepeating(input1)); // Output: "EKSFORG"
//   const input2 = "ABDEFGABEF";
//   console.log(longestSubstringWithoutRepeating(input2)); // Output: "BDEFGA"

// function rotatedSubstring(array){
//     let n = array.length;
//     let start =0;
//     let bestStart=0;
//     let maxLength=0;
//     let charIndex={};

//     for (let index = 0; index < n; index++) {
//         let  currentChar = array[index];
//         if(charIndex[currentChar] !== undefined && charIndex[currentChar] >= start){
//             start=  charIndex[currentChar]+1;
//         }
//         charIndex[currentChar]=index;
//         if(index - start + 1 > maxLength){
//             maxLength = index-start+1;
//             bestStart  = start;
//         }
//     }
//     return array.substr(bestStart,maxLength)
// }
// const input1 = "GEEKSFORGEEKS";
// console.log(rotatedSubstring(input1)); // Output: "EKSFORG"

// const input2 = "ABDEFGABEF";
// console.log(rotatedSubstring(input2)); // Output: "BDEFGA"
  

// function longestSubstringWithoutRepeatingCharacters(array) {
//     let n = array.length;
//     let start = 0;
//     let bestStart = 0;
//     let maxLength = 0;
//     let charIndex = {};

//     for (let index = 0; index < n; index++) {
//         let currentChar = array[index];

//         if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= start) {
//             start = charIndex[currentChar] + 1;
//         }
        
//         charIndex[currentChar] = index;

//         if (index - start + 1 > maxLength) {
//             maxLength = index - start + 1;
//             bestStart = start;
//         }
//     }

//     return array.substring(bestStart, bestStart + maxLength);
// }

// const input1 = "GEEKSFORGEEKS";
// console.log(longestSubstringWithoutRepeatingCharacters(input1)); // Output: "EKSFORG"

// const input2 = "ABDEFGABEF";
// console.log(longestSubstringWithoutRepeatingCharacters(input2)); // Output: "BDEFGA"


// const a = 'vivek verma';

// function capitalizeFirstLetterWithoutMethods(sentence) {
//   let result = ''; // Initialize an empty string to store the result
//   let capitalizeNext = true; // Flag to determine whether the next character should be capitalized

//   for (let char of sentence) {
//     // Iterate through each character in the sentence
//     if (char === ' ') {
//       // If the character is a space, set the flag to true
//       capitalizeNext = true;
//     } else {
//       // If the character is not a space
//       result += capitalizeNext ? char.toUpperCase() : char.toLowerCase();
//       // Append either the uppercase or lowercase version of the character to the result
//       capitalizeNext = false; // Reset the flag to false
//     }
//   }

//   return result; // Return the final capitalized string
// }

// const result = capitalizeFirstLetterWithoutMethods(a);
// console.log(result);




// let strig = 'su*pe%rsou#rci@ng$%'
// let s=''
// for(let i=0;i<strig.length;i++){
// //   console.log(strig[i]," strig[i]")
// //       console.log(i," i")
//   if(strig[i]>='a' &&  strig[i]<='z' || strig[i]>='A' && strig[i]<='Z' ){
//     s=s+strig[i];
//   }
// }

// let length=0;
// let element ;
// let str ='my annnnna mom is called annna!'
// str.split(' ').map((item)=>{
   
//     let revesrseValue =item.split('').reverse().join('')
//     if(item == revesrseValue){
//         length =length > item.length ? length : item.length;
//         element=length > item.length ? element : item
//     }
    
// })
//  console.log(element,length)



// let a='secure'
// let b ='rescue'

// let sortedA = a.split('').sort().join('');
// let sortedB = b.split('').sort().join('');

// console.log(sortedA==sortedB)

// let n =10;
// febonaSeries(n)
// function febonaSeries(n){
//     let a=0;
//     let b=1;
//     let c;
//     console.log(a)
//     console.log(b)
//     for(i=0;i<n;i++){
//         c=a+b;
//         a=b;
//         b=c;
//         console.log(c)
//     }
     
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbbb"));
// console.log(lengthOfLongestSubstring("abcdef"));
// console.log(lengthOfLongestSubstring(""));
// console.log(heh("GEEKSFORGEEKS"));
// console.log(heh("pwwkew"));
// console.log(lengthOfLongestSubstring("GEEKSFORGEEKS"));

    // function lengthOfLongestSubstring(str){
    //     let length=0;
    //     let maxStr =''

    //     for (let i = 0; i < str.length; i++) {
    //         for (let j = i + 1; j <= str.length; j++) {
    //             let subs = str.substring(i, j);
    //             let rev = subs.split('').reverse().join('');
    //             if (subs === rev) {
    //                 if (subs.length > length) {
    //                     length = subs.length;
    //                     maxStr = rev;  // Update maxStr here
    //                 }
    //             }
    //         }
    //     }
    //     return {length ,maxStr}
    // }



    // Subject &    BehaviorSubject
    // BehaviorSubject
    // Retains last value
    // Emits latest value to new subscribers
    // Initial value required
// Subject
// Subject, which does not retain the last emitted value
// const array = [1,2,[3,4,[5,6]]]

// function rec(arr){
//     let res =[];
//    for(let item of arr){
//        console.log(res,'res')
//        if(Array.isArray(item)){
//            res = res.concat(rec(item));
//            console.log(res,'iffff')
           
//        }else{
//            res.push(item);
//        }
//    }
//    return res;
    
// }
// console.log(rec(array))


        // selection sort Algorithm
        // let data=[20,12,53,3]
        // Assending sort
        // function selectionSort(items){
        //     let n= items.length;
        //     let minValue;
        //     for(let i=0;i<n; i++){
        //         minValue=i;
        //         for(let j=i+1;j<n;j++){
        //             // 12 < 20
        //             if( items[j] < items[minValue] ){
        //                 minValue = j
        //             }
        //         }
        //         let temp= items[i];
        //         items[i]= items[minValue];
        //         items[minValue]=temp
        //     }
        // }
        // function selectionSort(items){
        //     let n= items.length;
        //     let minValue;
        //     for(let i=0;i<n; i++){
        //         minValue=i;
        //         for(let j=i+1;j<n;j++){
        //             // 12 > 20
        //             if( items[j] > items[minValue] ){
        //                 minValue = j
        //             }
        //         }
        //         let temp= items[i];
        //         items[i]= items[minValue];
        //         items[minValue]=temp
        //     }
        // }
        // selectionSort(data);
        // console.log(data,'data');

        // Insertion sort
        // let data=[20,11,12,5,6]
        // function insertionSort(items){
        //     let n= items.length;
        //     let currentValue,j;
        //     for(let i=1; i<n; i++){
        //         currentValue= items[i];
        //         j=i-1;
        //         while( j >=0, items[j] > currentValue){
        //             items[j+1] =items[j]
        //             j--;
        //         }
        //         items[j+1]=currentValue;
        //     }
        // }
        // insertionSort(data);
        // console.log(data,'data');
        


   
//    Longest Substring Without Repeating Characters

// function longestSubstringWithoutRepeatingCharacters(s) {
//     let maxLength = 0;
//     let start = 0;
//     let charIndexMap = {};

//     for (let end = 0; end < s.length; end++) {
//         let char = s[end];
        
//         if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
//             start = charIndexMap[char] + 1;
//         }

//         charIndexMap[char] = end;
//         maxLength = Math.max(maxLength, end - start + 1);
//     }

//     return maxLength;
// }
// function lengthOfLongestSubstring(str) {
//     let maxLength = 0;
//     let start = 0 ;
//     let end = 0 ;
//     let substr = new Set();
//     while(end < str.length){
//         if(!substr.has((str[end]))){
//             substr.add(str[end])
//             end++;
//             maxLength = Math.max(maxLength, end - start);

//         }else{
//          substr.delete(str[start]);
//             start++;
//         }
//     }
//     return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("abcdef"));
// console.log(lengthOfLongestSubstring(""));
// console.log(heh("GEEKSFORGEEKS"));
// console.log(heh("pwwkew"));
// console.log(lengthOfLongestSubstring("GEEKSFORGEEKS"));

// Median of Two Sorted Arrays

// let nums1 = [1,2];
// let nums2 = [3,4];
// let mergedArray=[]
// i=0;
// j=0;
// k=0;
// while(i < nums1.length && j < nums2.length){
//     if(nums1[i] < nums2[j]){
//         mergedArray[k]=nums1[i]
//         i++
//     }else{
//         mergedArray[k]=nums2[j]
//         j++;
//     }
//     k++
// }
// while(i < nums1.length){
//     mergedArray[k]=nums1[i]
//     k++;
//     i++;
// }
// while(j < nums2.length){
//     mergedArray[k]=nums2[j]
//     k++;
//     j++;
// }
// let median;
// if(mergedArray){
//     let mid = Math.floor(mergedArray.length/2);
//     if(mergedArray.length % 2===0){
//         median =(mergedArray[mid-1] + mergedArray[mid])/2
//     }else{
//         median= mergedArray[mid];
//     }
// }
// console.log(median);

// Longest Palindromic Substring
//  s = "babad"
// ----------------------------------------------------------------


// Find enven value s form array, Make double og every eleent and find array length
// function evenNumber(arr){
//     let newarr = [];
//     let j=0;

//     for(let i=0; i <arr.length; i++){
//         if(arr[i]%2 === 0){
//             newarr[j] = arr[i]*2;
//         j++;
//         }

//     }
//     return {newarr,j};
// }
// let a =[6,5.10,13,14,16,17]
// console.log(evenNumber(a));

// Check string are anagram
// check- both length are same ,repeat chart

//  function isAnagram(str1, str2) {
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let charCount1 = {};
//     for(let i = 0; i < str1.length; i++){
//     charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
//     }
//     for(let i = 0; i < str2.length; i++){
//     if(!charCount1[str2[i]]){
//     return   false
//     }
//     charCount1[str2[i]]--;
// if(charCount[str[i]]){
//             charCount[str[i]]++;
//         } else{
//             charCount[str[i]] = 1;
//         }
// }
// return true
// }
// let str1 ='cat';
// let str2 ='tsc'
// console.log(isAnagram(str1,str2));

// Check string is Palendrome
// function checkPalendromeString(str){
    // let reversedStr = str.split('').reverse().join('');
    // if(str === reversedStr){ 
    //     return true;
    // }else{
    //     return false;
    // }

    // let index = 0;
    // let j = str.length - 1;
    // for (let index = 0; index < str.length; index++) {
    //     if(str[index]!==str[j]){
    //         return false;
    //     }
    //     j--;
    // }
    // return true

    // let start=0;
    // let end=str.length-1;
    // let result = true
    // while(start < end){
    //     if(str[start]!== str[end]){
    //         result = false;
    //         break;
    //     }
    //     start++;
    //     end--;
    // }
    // return result;
// }
// let str='level'
// console.log(checkPalendromeString(str));

// Maximum occuring characters in a string
// function maxOccurringCharacter(str) {
//     let charCount = {};
//     let maxCount = 0;
//     let maxChar = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//         if (charCount[char] > maxCount) {
//             maxCount = charCount[char];
//             maxChar = char;
//         }
//     }

//     return {maxChar,maxCount};
// }

// let srt='hello world'
// console.log(maxOccurringCharacter(srt));

// Object (Hash Table) DS in js

// longestPalindrome----------------------------------------------------------------

// function longestPalindrome(s) {
//     if (s.length < 1) return "";

//     let start = 0, end = 0;
// debugger;
//     const expandAroundCenter = (s, left, right) => {
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }
//         return right - left - 1; // Length of the palindrome
//     };

//     for (let i = 0; i < s.length; i++) {
//         let len1 = expandAroundCenter(s, i, i); // Odd length palindromes
//         let len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
//         let len = Math.max(len1, len2);
//         if (len > end - start) {
//             start = i - Math.floor((len - 1) / 2);
//             end = i + Math.floor(len / 2);
//         }
//     }
//     return s.substring(start, end + 1);
// }

// // Example usage:
// // const inputString = "babad";
// const inputString = "cbbd";
// const longestPalindromicSubstring = longestPalindrome(inputString);
// console.log(longestPalindromicSubstring); // Output: "bab" or "aba"

// function longestPallindrome(str) {
//     let string = str.toLowerCase();
//     let pallindrome = '';
    
//     function strReverser(start, end) {
//         const rev = string.substr(start, end).split('').reverse().join('');
//         return rev;
//     }
    
//     for(let i=0; i<=string.length; i++) {
//         for(let j=i; j<=string.length; j++) {
//             if(string.substr(i,j) == strReverser(i,j)) {
//                 if(string.substr(i,j).length > pallindrome.length) {
//                     pallindrome = string.substr(i,j);
//                 }
//             }
//         }
//     }
    
//     if(pallindrome != null) {
//         return pallindrome;
//     }
// }
// let result1 = longestPallindrome('My mom is called annnna')
// let result2 = longestPallindrome('My dad is a racecar athelete')



// Quince
// Union/inseration,

// Election winner,
// function findWinner(items){
//     const charc ={};
//     for(let char of items){
//         charc[char]=(charc[char] || 0) + 1;
//     }
//     // return charc;
//     let maxVotes=0;
//     let candidate=''
    
//     for(let item in charc){
//         if(charc[item] > maxVotes){
//             candidate = item;
//             maxVotes = charc[item]
            
//         }
//         return {maxVotes,candidate }
        
//     }
    
    
// }
// console.log(findWinner(['a','b','c','a','a','d','d']))
// js Execution