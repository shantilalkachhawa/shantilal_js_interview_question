// Apna college DSA Lectures

// solid Recatanble

// for (let row =1; row<= 5; row++){
// let output=''
//     for (let col=1;col<=5; col++){
//         // console.log(col);
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

// New key have used to be created memory sapce.

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
let arr=[7,23,8,2,8,1,4]

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


function sumOfNumbers(i,n,sum){

    
    if(i==n){
        console.log(sum+=i)
        return ;
    }
    sum+=i;
    return sumOfNumbers(i+1,n,sum)
}

console.log(sumOfNumbers(1,5,0)); // 15