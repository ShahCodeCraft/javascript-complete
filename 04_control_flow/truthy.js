// const userEmail = "shah@gmail.com"

// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont have user email")
// }


// falsy values :
// false , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN

//  false == 0 --true
//  false == "" --true
//  0 == ""  --true

// truthy values :
// true , "0" , "false" , " " , [] , {} , function(){}  

// const emptyArray = [] ;
// if(emptyArray.length === 0){
//     console.log("Array is empty")
// }


// const emptyObject = {} ;
// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty")
// }


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

//  Ternary Operator

// condition ? true : false 

const icePrice = 100
icePrice <=80 ? console.log("less than 80") : console.log("More than 80")