// const str = 'my name is shahnawaz alam';
// const str1 = str.split(" ");
// for(let i=0; i<str1.length; i++){
//     str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
// }
// const str2 = str1.join(" ");
// console.log(str2);

// const num = parseInt(prompt("Enter a value"));
// if(num<0){
//     console.log("Error negative value is not provide factorial")
// }
// else if(num===0){
//     console.log("Factorial of 0 is 1");
// }
// else{
//     let Fact = 1;
//     for(let i=1; i<=num; i++){
//         Fact = Fact*i;
//     }
//     console.log(`Factorial of ${num} is ${Fact}`);
// }

// const arr = [10,20,30,40,20,10,20,30,50,40];
// const removeDup = [...new Set(arr)];
// console.log(removeDup);

// const arr = [10,20,30,40,30,10,20,50];
// const removeDup = () =>{
//     return arr.filter((item,index)=>arr.indexOf(item)===index);  
    
// }
//     console.log(removeDup(arr));


// const arr = [10,20,10,20,30,30,40];
// const removeDup = () =>{
//     return arr.filter((item,index)=>arr.indexOf(item)===index);
// }
// console.log(removeDup(arr));

// const num = [10,20,30,40,50];
// console.log(Math.max(...num));
// console.log(Math.min(...num

// const num = [10,20,30,40,50];
// console.log(num.indexOf(20));
// const num = ['Banana','Apple','Orange'];
// console.log(num.indexOf('Apple'));

// const arr1 = [10,20,30,40];
// console.log(arr1.concat(50,60));
// console.log(arr1.includes(60));
// console.log(arr1.join('-'));
// console.log(arr1.reverse());
// const arr2 = arr1.includes(25);
// console.log(arr2);
// const arr2 = [50,60,70,80];
// const arr3 = arr1.concat(...arr2);
// console.log(arr3);

// const num = [10,20,30];
// const sum = (a,b) =>{
//       return = a+b;
// }
// console.log(sum);


// const num = [10,20,30,40];
// const mult = num.map(function(value,index){
//     return value*5;
// })
// console.log(mult);
//  var data = [1,2,3,4,5,6,7];
//         var double = data.map(function(value,index){
//             return value*5;
//         })
//         console.log(double);

// const num1 = [10,20,30];
// const num2 = [40,50,60];
// // const num3 = [...num1,...num2];
// const num3 = num1.concat(...num2);
// console.log(num3);

// const num = [10,20,30,40];
// const CheckVal = num.filter((value)=>{
//     return value >10;
// })
// console.log(CheckVal)

// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);
