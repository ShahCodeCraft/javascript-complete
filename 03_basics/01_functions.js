function sayMyName () {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H"); 
}
// sayMyName()

// function addTwoNumber(num1,num2){       // (num1,num2) this parameters
//     console.log(num1 + num2)
// }
// addTwoNumber(3,6)       // (3,6) this is arguments
// addTwoNumber(3,"6")


// const result = addTwoNumber(3,6) ;
// console.log("Result",result);       // Result undefined



function addTwoNumber(num1,num2){       // (num1,num2) this parameters

//    let result = num1 + num2;
//    console.log("Shahnawaz")            // this will execute
//    return result;
//    console.log("Shahnawaz")           // after return this will not execute

    //    return num1 + num2;
}  

const result = addTwoNumber(5,8);
// console.log("Result",result);


function loginUserMessage (username){
    // if(username === undefined){
    //     console.log("Please enter a usernam")
    //     return
    // }

    if(!username){
        console.log("Please enter a usernam")
        return
    }

    return `${username} Just logged in`
}
console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));