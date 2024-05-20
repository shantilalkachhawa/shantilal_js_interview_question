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
