//  if statement 

// if(condition){

// }

// const isUserLoggedIn = true;

// if(isUserLoggedIn){

// }

// if(2 === "2"){
//     console.log("excuted")
// }

// const temperature = 41

// if(temperature < 50){
//     console.log("Less than 50")
// }
// else{
//     console.log("temperature greater than 50")
// }
// console.log("Execute")

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }

// console.log(`User power : ${power}`)   // cannot access the block scope varialbes

// consdition check
// < , > , <= , >= , == , != , === , !==  

 const balance = 1000
//  if(balance > 500) console.log("test"), console.log("test2")      // This is not recommended

// if(balance < 500){
//     console.log("Less than");
// }
// else if(balance < 750){
//     console.log("Less than 750")
// }
// else if(balance < 900){
//     console.log("Less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard ){
    console.log("Allow to buy course")
} 

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in ")
}