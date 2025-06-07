// merge to sorted array same or  not

// const arr1 = [1, 2, 3,10];
// const arr2 = [2, 4, 6,7];
// const arr3 = []

// let i=0;
// let j=0;
// let k=0;

// while(i < arr1.length && j < arr2.length){
//     if(arr1[i] < arr2[j]){
//         arr3[k] = arr1[i];
//         i++;
//     }else{
//         arr3[k] = arr2[j];
//         j++;
//     }
//     k++;
// }
// while(i < arr1.length){
//     arr3[k] = arr1[i];
//     i++;
//     k++;
// }
// while(j < arr2.length){
//     arr3[k] = arr2[j];
//     j++;
//     k++;

// }
// console.log(arr3,'arr3');


// ----------------------------------------------------------------
    // two index sum

    // Example 1:

    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Example 2:
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]
    // Example 3:
    // Input: nums = [3,3], target = 6
    // Output: [0,1]
    // let nums = [1,0,1,3,3]
    // let target = 6;

    // for(let  i =0; i < nums.length; i++) {
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target){
    //             console.log(i,j);
    //         }
    //     }

    // }

    // ----------------------------------------------------------------
    // 2. Add Two Numbers


    // let  l1 = [2,8,3,2,2,0]
    // let  l2 = [5,6,4]
    // let  l3 = []
    // let  carryValue =0;
    // let k =0;
    // let firstArr=l1.length
    // let secArr=l2.length
 
    // if( firstArr < secArr){
    //     for(let i = firstArr;i < secArr;i++ ){
    //         l1[i]= 0 ;
    //     }
        
    // }else{
    //    for(let j = secArr;j < firstArr;j++ ){
    //         l2[j]=0;
    //     }  
    // }
    //   console.log(l1)
    //   console.log(l2)
 
    // for (let i = 0; i < l1.length; i++) {
    //  for(let j = i; j <= i; j++) {
    //      let sum =  l1[i] + l2[j]+ carryValue;
    //       if (sum >= 10) {
    //          carryValue = Math.floor(sum / 10);
    //          sum = sum % 10; 
    //      } else {
    //          carryValue = 0;
    //      }
    //      l3[k] =sum
    //      k ++;
 
    //  }
 
    // }
    // console.log(l3)

    // Optimsie
//     let  l1 = [2,8,3,2,2,67]
//     let  l2 = [5,6,4,8,6,44]
//     let i= 0;
//     let str='';
//     let carryValue =0;
//     let firstArr=l1.length
//     let secArr=l2.length
//     let treveseLength = 0;


//     if(firstArr > secArr) {
//         treveseLength=firstArr;
//     }else{
//         treveseLength=secArr;
//     }
//     while(i < treveseLength ){
//     let sum = (l1[i] ||0) + (l2[i]||0) + carryValue;
//     if(sum >=10){
//         carryValue=Math.floor(sum/10);
//         sum=sum%10
//     }else{
//         carryValue=0;
//     }
//     str+=sum;
//     // 67 + 67 =134
// //    when last carry value is greater then carryValue
//     if(treveseLength-1 === i && carryValue > 0){
//         if(carryValue < 9){
//             str+=carryValue;
//             carryValue=0;
//         }else{
//             while(carryValue!=0){
//                 str+=carryValue%10;
//                 carryValue=Math.floor(carryValue/10);
//             }
//         }
//         // console.log(carryValue,'carryValue');
       
//     }
//     i++;
    

//     }
//     console.log(str);
// 5. Longest Palindromic Substring

// function LongestPalindromic(str){

//     console.log(str,'str');

// }
// let str='babad'
// let str='cbbd'
// expand from  center
// LongestPalindromic(str)

    
// Best LongestPalindromic string
// let str='bbbbb'
// let lenght=0;
// let values ;

// for(let i=0;i<str.length;i++){
//     for(j=i+1;j<str.length;j++){
//         let subs = str.substring(i,j)
//         let rev = subs.split('').reverse().join('')
//         if(subs == rev){
//             lenght=lenght > subs.length ? lenght :subs.length;
//             values=lenght > subs.length ? values :rev
//         }
//     }
// }

// console.log(values)