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
//     index = (index + 1)% lenght
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