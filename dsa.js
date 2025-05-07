// Apna college DSA Lectures

// solid Recatanble

// for (let row =1; row<= 5; row++){
// let output=''
//     for (let col=1;col<=5; col++){
//        //  console.log(col);
//         output+=col

//     }
//     console.log(output);
    
// }

// Holo rectangles
// ******
// *    *
// *    *
// *    *
// *    *
// ******

// let row = 5;
// let col = 5;
// for(let i=1;i<=row; i++) {
//     let output='';
//     for (let j=1;j<=5;j++) {
//         if(i==1 || j ==1 || i == row || j== col){
//             output+='*';
//         }else{
//             output+=' ';
//         } 
//     }
// console.log(output);
// }

// print halfe peramid
// *
// **
// ***
// ****

// for(let i = 0; i < 4; i++){
//     let output = '';
//     for(let j=0;j<=i; j++){
//         // output+=i
//         output=output +i;
//     }
//     console.log(output);

// }
// Invert half permid 
// *****
// ****
// ***
// **
// *
// let row= 5
// for(let i=row;i>=1;i--){
// let output= ''
//     for(let j=1;j<=i;j++){
//        output+='*'
//     }
//     console.log(output);

// }

// inverted half peramid 180 - 4*4

//    *
//   **
//  ***
//*****
// let row=4;
// for(let  i=1;i<= row; i++){
//     let output='';
//     for(let j=1;j<=row-i;j++){
//         output+=' ';
//     }
//     for(let k=1;k<=i;k++){
//         output+='*';
//     }
//     console.log(output);
// }

// Half pyramin with number 
// 1
// 12
// 123
// 1234
// 12345
// let row= 5
// for(let i=1;i<=row;i++){
//     let output='';
//     for(let j=1;j<=i; j++){ 
//         output+=j;
//     }
//     console.log(output);
// }

// Inverted Half pyramin with number 

// let row=5;
// for(let i=row;i>=1;i--){
//     let output='';
//     // n-i+1
//     for(let j=1;j<=i; j++){
//         output+= j;
//     }
//     console.log(output);

// }

// second type

// let n=5;
// for(let i=1;i<=5;i++){
//     let output='';
//     // n-i+1
//     for(let j=1;j<=n-i+1; j++){
//         output+= j;
//     }
//     console.log(output);
// }


// floyd tringle 
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
 
// let n = 5;
// let number = 1;

// for (let i = 1; i <= n; i++) {
//     let output = '';
//     for (let j = 1; j <= i; j++) {
//         output += number + ' ';     
//         number++;
//     }
//     console.log(output);
// }
// second option
//  let n = 5;

//  for (let i = 1; i <= n; i++) {
//     let output = '';
//      for (let j = 0; j <i; j++) {
//            let num = ((i *(i-1))/2)+(j +1);
//         output += num + ' ';     
//              }
//    console.log(output);
// }



// 0-1 tringle 
// 1
// 01
// 101
// 0101
// 10101

// i+j=even then 1
// i+j=odd then 0


// let n=5;
// for(let i=1;i <= n; i++) {
//     let output=''
//     for(let j =1;j <= i; j++) {
//     const sum=i+j;
//         if(sum %2==0 ){
//             output+='1' + ' ';
//         }else{
//             output+='0' +' ';
//         }
//     }
//     console.log(output);
// }


// Print a solid rhombus

//     +++++
//    +++++ 
//   +++++  
//  +++++   
// +++++    

// let row= 5;
// let col =9;
// for(let i=1;i< row;i++){
//     let output='';
//     for(let j=1;j<row-i;j++){
//         output+=' ';
//     }
//     for(let j=1;j<=row;j++){
//         output+='*';
//     }
// console.log(output);
// }

//Print a number pyramid.
//     1
//    2 2
//   3 3 3
//  4 4 4 4 
// 5 5 5 5 5 5
// let row=5
// let col=5
// for(let i=1;i<=row;i++){
//     let output=''; 
//     for(let j=1;j <=row-i;j++){
//         output+=' '
//     }
//     for(let j=1;j<=i;j++){
//         output+=i+' '
//     }
// console.log(output);
// }

//Print a palindromic number pyramid.
//       1
//      212
//     32123
//    4321234
//   543212345
//   let n=5;
//   for(let i=1;i<=n;i++){
//     let output='';
//     for(let j=0;j<=n-i-1;j++){
//         output+=' ';
//     }
//     for(let j=i;j>=1;j--){
//         output+=j;
//     }
//     for(let j=2;j<=i;j++){
//         output+=j;
//     }
//     console.log(output);
//   }

// Butter Fly patterns
//  *             *
//  * *         * *
//  * * *     * * *
//  * * * * * * * *
//  * * * * * * * * 
//  * * *   * * * *
//  * *         * *
//  *             *
//  let n=4;

// for(let i=1;i <=n;i++) {
//     let output='';
//     for(let j=1;j<=i;j++) {
//         output+='*';
//     }
//     for(let j=1;j<=2*(n-i);j++) {
//         output+=' ';
//     }
//     for(let j=1;j<=i;j++){
//         output+='*';
//     }
//     console.log(output);
// }
// for(let i=n;i >=1;i--) {
//     let output='';
//     for(let j=1;j<=i;j++) {
//         output+='*';
//     }
//     for(let j=1;j<=2*(n-i);j++) {
//         output+=' ';
//     }
//     for(let j=1;j<=i;j++){
//         output+='*';
//     }
//     console.log(output);
// }

// Diamond pattern
//     *
//    ***
//   *****
//  *******

// let n=4;
// for(let i=1;i<=n;i++){
//     let output=' '
//     for(let j=1;j <=n-i; j++){
//         output+=' ';
//     }
//     for(let j=1;j<= 2*i-1 ; j++){
//         output+='*';
//     }
//     console.log(output);
    
// }
// for(let i=n;i>=1;i--){
//     let output=' '
//     for(let j=1;j <=n-i; j++){
//         output+=' ';
//     }
//     for(let j=1;j<= 2*i-1 ; j++){
//         output+='*';
//     }
//     console.log(output);
    
// }

// New() key have used to be created memory sapce.

// Print matrix
// let data=[
//     [1, 2, 3,0],
//     [4, 5, 6,0],
//     [7, 8, 9,0]
// ]
// let rows=data.length
// let col=data[0].length
// for (let i = 0; i < rows; i++) {
//     let output = '';
//     for (let j = 0; j < col; j++) {
//         output += data[i][j] + ' '; 
//     }
//     console.log(output);  
// }


// Reverse string
// let str='shantilal kachhawa'
// let n = Math.floor(str.length/2)
// let arr = str.split('');

// for(let i=0; i<n; i++) {
//     let temp=arr[i];
//     arr[i]=arr[arr.length-1-i];
//     arr[arr.length-1-i]=temp;

// }
// str = arr.join('');
// console.log(str)


// let a=10;
// let b=0;
// b=a++; // use/assign value and change value

// console.log(a); // 11
// console.log(b); // 10

// b=++a; // change value and use/assign value

// console.log(a); // 11
// console.log(b); // 11


// Buble Sort

// function bubleShort(arr){
//     for(let i=0; i<arr.length; i++){
// // Shorted element are moved to the right side
//         for(let j=0; j<arr.length-i-1; j++){
//             if(arr[j]> arr[j+1]){
//                 // swap the elements of inner Loop
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr=[7,23,8,2,8,1,4]

// bubleShort(arr);
// console.log(bubleShort(arr))


// selection sort

// function selectionSorting(arr){
//     for(let i=0; i<arr.length-1; i++){
//         let smallest = i;
//         for(let j=i+1;j < arr.length; j++){
//             if(arr[j] < arr[smallest]){
//                 smallest = j;
//             }
//         }
//         var temp = arr[smallest];
//         arr[smallest] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;

// }
// selectionSorting(arr);
// console.log(selectionSorting(arr))

// Diveder into two parts 1 shorted & 2 unsorted
// function inseration(arr){
// // 7,8
//     for(let i=1; i<arr.length; i++){
//         let key = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         // placement
//         arr[j+1]=key;
//     }
//     return arr;

// }

// console.log(inseration(arr));



// ************** Recursion 

// function countNumber(n){
//     if(n==0){
//         return
//     }
//     console.log('Count is',n)
//     return countNumber(n-1)
// }
// console.log(countNumber(5))


// function sumOfNumbers(i,n,sum){

    
//     if(i==n){
//         console.log(sum+=i)
//         return ;
//     }
//     sum+=i;
//     return sumOfNumbers(i+1,n,sum)
// }

// console.log(sumOfNumbers(1,5,0)); // 15

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     let fact =factorial(n-1);
//     return n*fact;
// }
// console.log(factorial(5)); // 15

// function fibanacceSerice(a,b,n){
//     let c=a+b;
//     if(n==1){
//         return ;
//     }
//     console.log(c)
//     return fibanacceSerice(b,c,n-1)
// }
// let n=7;
// let a=0;
// let b=1;
//  console.log(a);
//     console.log(b);
// console.log(fibanacceSerice(a,b,n))

// function calPower(x,n){
//     if(n==0){
//         return 1;
//     }
//     if(x==0){
//         return 1;
//     }
//     console.log(x,n)
//     let power = calPower(x,n-1);
//     console.log(power,'power')
//     return x*power;
// }
// OR

// function calPower(x,n){
//     if(n==0){
//         return 1;
//     }
//     if(n==1){
//         return x;
//     }
//     let half = calPower(x,Math.floor(n/2));
//     if(n%2==0){
//         return half*half;
//     }else {
//         return x*half*half;
//     }
// }

// console.log(calPower(2,3)); // 8

// Tower of honoi

// function diskTransform(n,src,help,dest)
// {
//     // Base case
//     if(n == 1)
//     {
//         console.log(`Move disk ${n} from ${src} to ${dest} `);
//         return;
//     }
 
//     diskTransform(n-1,src,dest,help)
//     console.log(`Move disk ${n} from ${src} to ${dest} `);

//     diskTransform(n-1,help,src,dest)
 
// }
// let n=3;
// console.log(diskTransform(n,'S','H',"D"));


// reverse string using recursion
// function reverseString(str,n){
//     if(n==0){
//         return str[n];
//     }
//     return  str[n] + reverseString(str,n-1);
    

// }

// let str='shantilal'
// let n = str.length-1
// console.log(reverseString(str,n));

// find the first and last value occurence of the given string
// let str = 'bbaecaabffab'
// let firstOc=-1;
// let lastOc=-1;
// let element ='a'


// for(let i=0,j=str.length-1; i< j;i++,j--){
//     console.log('loop')
//     if(str[i] == element && firstOc === -1){
//             firstOc = i; 
//     }
//     if(str[j] == element && lastOc === -1){
//         lastOc = j;
//     }
// }
// console.log(firstOc);
// console.log(lastOc)

// recursion
// let firstOcc=-1; 
// let lastOcc=-1; 
// function findOccurence(str,n,element){
//     if(n === str.length){
//         return {firstOcc, lastOcc};
//     }
//   if(str[n] === element){
//     if(firstOcc === -1){
//         firstOcc = n;
//     }else{
//         lastOcc = n;
//     }
//   }
//    return findOccurence(str,n+1 ,element);
// }
// let str='bbaecaabffab'
// console.log(findOccurence(str,0,'a'));


// is Array is sorted or not
// function arraySort(a){
//     let sorted =true ;
//     for(let i=0;i<a.length ; i++){
//         if(a[i] > a[i+1]){
//             sorted =false;
//             break;
//         }
//     }
//     return sorted;
// }
// let a =[1,6,3,4,5,6]
// console.log(arraySort(a))
// function arraySort(a,n){
//     if(n === a.length-1){
//         return true;
//     }
//     // if(a[n] < a[n+1]){
//     //     return arraySort(a,n+1);
//     // }else{
//     //     return false;
//     // }
// OR
//     if(a[n] >= a[n+1]){
//         return false;
//     }else{
//         return arraySort(a,n+1);
//     }
// }
// let a =[1,2,3,4,5,6]
// console.log(arraySort(a,0))

// Move all X in end of the string
// let newStr=''
// function moveAllX(str,index,count){
//     if(index === str.length){
//         console.log(count,'count');
        
//         for(let i=0;i<count.length;i++){
//             console.log(i,'inn');
//             newStr+='x';
//         }
//     return newStr ;
//     }
//    if(str[index]=='x'){
//     count++;
//     return moveAllX(str,index+1,count)
//    } else{
//     newStr+=str[index];
//     return  moveAllX(str,index+1,count)
//    }

// }
// let str ='axbcxxdsx'
// console.log(moveAllX(str,0,0));

// let str ='aaxxbbaaxx';
// let newStr='';
// let count = 0;
// for(let i=0;i< str.length-1;i++){
//     if(str[i]==='x'){
//         count++
//     }else{
//        newStr+=str[i] 
//     }
// }
// for(let i=0;i <= count;i++){
//     newStr+='x' 
// }
// newStr += 'x'.repeat(count);

// remove duplicate in string
// let str ='aaxxbbaaxx';
// let newStr='';

// for(let i=0;i< str.length-1;i++){
//     if(!newStr.includes(str[i])){
//        newStr+=str[i]
//     }
// }

// console.log(newStr)
// let newStr = '';
// let map = new Array(26).fill(false); // Create a boolean array to track characters
// function removeDuplicates(str, index) {
//     if (index === str.length) {
//         return newStr;
//     }

//     let charIndex = str[index].charCodeAt(0) - 'a'.charCodeAt(0); // Get index for current character in the alphabet
//     console.log(charIndex,'charIndex')

//     if (!map[charIndex]) {  // If the character hasn't been seen before
//         newStr += str[index];
//         map[charIndex] = true;  // Mark this character as seen
//     }
//     console.log(map); // update my original array
    

//     return removeDuplicates(str, index + 1); // Recur for the next character
// }

// let str = 'aaxxbbaaxx';
// console.log(removeDuplicates(str, 0));

// print all the subsequesnce in the string // ana chata h ya nh us string m like abc,ab_,a_c,a_ _,_bc,-b-,--c,---,


// function subsequesnce(str, index,newStr) {

//     if (index === str.length) {
//         console.log('newStr',newStr);
//         return newStr;
//     }
//     const currentChar =str[index]
//     // to be add
//     subsequesnce(str, index + 1,newStr+currentChar);
//     // to be not added
//     subsequesnce(str, index + 1,newStr);

// }
// let a='abc'
// let newStr=''
// console.log(subsequesnce(a,0,newStr));

// print all the uniqe subsequesnce in the string

// function subsequence(str, index, newStr, resultSet) {
//     if (index === str.length) {
//         resultSet.add(newStr); // Add the current subsequence to the set
//         return;
//     }

//     const currentChar = str[index];

//     // Include the current character
//     subsequence(str, index + 1, newStr + currentChar, resultSet);

//     // Exclude the current character
//     subsequence(str, index + 1, newStr, resultSet);
// }

// function getAllUniqueSubsequences(str) {
//     let resultSet = new Set();
//     subsequence(str, 0, "", resultSet);
//     return Array.from(resultSet);  // Convert Set to Array for the result
// }

// let a = 'aaa'; // Example string
// let uniqueSubsequences = getAllUniqueSubsequences(a);
// console.log(uniqueSubsequences);

// Print keyPad combnation
// const keyMap = {
//     '1':'.',
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz'
// };
// function keypadCombination(digits, index, currentCombination) {
//     // Base case: when we reach the end of the digits
//     if (index === digits.length) {
//         console.log(currentCombination);  // Print the current combination
//         return;
//     }

//     // Get the letters corresponding to the current digit
//     let letters = keyMap[digits[index]];

//     // If the current digit has valid mapped letters
//     if (letters) {
//         // Recurse for each letter corresponding to the current digit
//         for (let i = 0; i < letters.length; i++) {
//             keypadCombination(digits, index + 1, currentCombination + letters[i]);
//         }
//     }
// }
// let digits ='23'
// console.log(keypadCombination(digits, 0, ""));


// Print all permutation of a string (All posible  combination of letter)
// function permutation(str,perStr){
//     if(str.length ==0 ){
//         console.log(perStr)
//         return perStr;
//     }
//     for(let i=0;i<str.length;i++){
//         let currentchar= str[i];
//         let subStr =str.substring(0,i) + str.substring(i+1);
//         //  console.log(subStr,'subStr');
//          permutation(subStr,perStr+currentchar);
//     }
// }

// console.log(permutation('abc',''))

//CountPathMaze  Count total path in a maze to move from (0,0) to (m,n)

// function countPathMaze(i,j,m,n){
//     if(i==m || j==n){
//         return 0;
//     }
//     if(i == m-1 && j == n-1  ){
//         return 1;
//     }
    
//     // down move
//     let downMove = countPathMaze(i+1,j,m,n);
    
//     // let move 
//     let leftMove = countPathMaze(i,j+1,m,n);
//     return leftMove + downMove;
    
// }
// console.log(countPathMaze(0,0,3,4))

// Place size of tiles of size 1xm in a floor of size n*m
// n=4,m=2

// function placeTiles(n,m){
//     if(n==m){
//         return 2;
//     }
//     if(n < m){
//         return 1;
//     }
//     // vertical 
//     let vertPlace = placeTiles(n-m,m);
//     // horizantol
//     let horPlace = placeTiles(n-1,m);
//     return vertPlace+horPlace;
// }

// console.log(placeTiles(4,2))

// Nqueen Place
// 
//Sudoku solver -- Recursion backtraking

// merge sort (sorted or unsorted)time complexity[--O(nlogn)--]
//  aproch (divide-conquer )
// 5 2 4 1 3 6
// 5 2 4---1 3 6
// 5 2 -- 4....1 3 --6
// 5--2--4--1--3--6
// 2--4--5--1--3--6
// 1--2--3--4--5--6


// function mergeSort(arr,left = 0, right = arr.length - 1){
//     if(left >= right){
//         return [arr[left]];
//     }
//     const mid = Math.floor((left + right)/2);
//     const leftSorted =mergeSort(arr,left,mid);
//     const rightSorted =mergeSort(arr,mid+1,right);
//     return marge(leftSorted,rightSorted);
//     // Merge the two sorted halves
// }
// function marge(leftArr,rightArr){
//     let result =[];
//         let i = 0, j = 0;
//     // Compare elements from leftArr and rightArr and add to result in sorted order
//      while (i < leftArr.length && j < rightArr.length) {
//         if (leftArr[i] <= rightArr[j]) {
//             result.push(leftArr[i++]);
//         } else {
//             result.push(rightArr[j++]);
//         }
//     }
//   // Add remaining elements from leftArr
//     while (i < leftArr.length) {
//         result.push(leftArr[i++]);
//     }

//     // // Add remaining elements from rightArr
//     while (j < rightArr.length) {
//         result.push(rightArr[j++]);
//     }

//     return result;

    
// }
// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log("Sorted array:", mergeSort(array));

// Diff merge sort used to extra memory space but quck sort not use 
// Quick sort (Pivot and partition) (TIme COmpli avg case -0(nlogn) worst case- 0(n^2) )
// IMP Note :- worst case occure when pviot is always smallest and largent (when array are sorted)---n^2
// Pivot - center point of the array like number travel pivot point,
// aproch ex- supose make a pivot number like radom element,mid element ,first element, last element
// let we have use last element

// function QuickSort(arr,low=0, high=arr.length-1){
    
//     // console.log(pviot)
//     if(low < high){
//         let pviotIdx = partition(arr,low,high)
//         // console.log(pviotIdx,'pviotIdx')
//          QuickSort(arr,low,pviotIdx-1);
//          QuickSort(arr,pviotIdx+1,high);
//     }
//     return arr;
    
// }
// function partition(arr,low,high){
//    const pviotEle = arr[high]; 
//    let i = low-1;
//    for(let j = low;j < high; j++){
//        if(arr[j] < pviotEle){
//            i++;
//             //   [arr[i], arr[j]] = [arr[j], arr[i]];
//            const temp = arr[i];
//            arr[i]=arr[j];
//            arr[j]=temp
//        }
//    }
// //   Pviot value
// i++;
// const temp = arr[i];
// arr[i]=pviotEle;
// arr[high]=temp
// //  [arr[i], arr[high]] = [arr[high], arr[i]];
// return i // pviotIdx
// }
// const arr=[6,3,2,5,4,8]
// console.log(QuickSort(arr))

// ARRAY LIST ------------------------------
// List interface
                  //  list
        //1           2         3
 //  Array list   link list    vetor
 //                                 |
 //                                stack   

// Queue  interface (fifo)
            //  queue
        //1           2         3
 //Priority queue   link list    deque(double ended queue)
 //                                 |
 //                              array queue



//  set intraface
            //  set
        //1           2         3
 //  hash set   link hash set    sorted set
 //                                 |
 //                              tree set


//  Map interface
            //  map
        //1           2         3                 4
 //  hash map   link hash map    sorted map    hash table
  //                                 |
 //                              tree map


//  NOTE- 
// For search use array list 
// For insert use link list 