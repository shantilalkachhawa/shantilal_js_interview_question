//Create BY Shantilal kachhawa-------JS-------//

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

// console.log(-0===0)
// console.log(-0==0)
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
// a.at(-1)

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

    //     let cleanStr= arr.replace(/[^    -zA-Z0-9]/g,'').toLowerCase();
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



// ******************OPPS

// polymerfizm
// run time polyfism - use can use on inheritence 
// show error on run time


// complile time polyfism - function loading time we can use
// show error on compile time
// we can use use same function with different-2 purposes  that is complile time polyfism

// Inheritance 
// single level inheritance
// multiple levels inheritance
// hirarchy inheritancetscoo
// hybrid inheritance

// base class/perent class/superclass - child class/subclass
//  one class  inherits properties and behaviors  from another class. It allows for code reuse and the creation of a hierarchy between classes
// get value from the another class inherits properties and behaviors.


// encapsulation - packages/access modifications

// combination of data , function and method  that is call encapsulation
// bundling of data (variables) and methods (functions) that operate on the data into a single unit,

// Abstractions - show user to imporatant item 
// we can use 2 typeof methods  abstract keyword or classes and interfaces
// we can abstract methods,non abstract class
// can not be instantiated (not created objects)

// interface -
// intercae ke constructor nh hote h
// non abstract function nh hota h like nameFun(){ }

// interface ko extent nh karte h implements karte h 
// interface nameOfInterface {
//     nameFun(): void; 
//     nameFun(){

//     //  }wrong
// }
// like class Horese implement nameOfInterface {

// }
// NOTE:-  multiple  inheritance only  use to in interface not class 

// Static