// Stack and Heap Memory 

// Stack memory : (Primitive)

// Heap memory :  (Non-Primity)
 
// let firstName = "Shahnawaz";
// let lastName = "Alam";

// lastName ="Khan";

// console.log(anotherName)
// console.log(anotherName)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "shah@google.com";

console.log(userOne.email);
console.log(userTwo.email);