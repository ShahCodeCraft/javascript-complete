const user = {
    username : "shah",
    price : 999,

   welcomeMessage : function() {
        console.log(`${this.username},welcome to website`)
        // console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "Alam"
// user.welcomeMessage()

console.log(this)

// function chai(){
//     let username = "shah"
//     console.log(this.username)       // we cannot use this keyword here
// }
// chai()

// const chai = function() {
//     let username = "Shah"
//     console.log(this.username);      // here also not use
// }
// chai()

const chai = () => {
    let username = "Shah"
    console.log(this.username); 
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

// const addTwo = (num1,num2) => {username:"Shah"}       //its return undefined

const addTwo = (num1,num2) => ({username:"Shah"})       //its return username : "Shah"
console.log(addTwo(4,6))