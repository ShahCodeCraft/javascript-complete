// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a)
// console.log(b)
// console.log(c)

var c = 300;
let a = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("INNER" , a);
}

// for(let i=0; i<Array.length; i++){
//     const element = array[i];
// }

console.log(a)
// console.log(b)
// console.log(c)



// +++++++++++++++++++ Nested Scope +++++++++++++++

function one(){
    const username = "shahnawaz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username ='Shah'
    if(username === 'Shah'){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//  +++++++++++++++++ Intresting ++++++++++++++++

console.log(addone(5));     // we can use before the function declaration

function addone(num){
    return num+1
}
// addone(5);


// console.log(addTwo(5))       // here we cannot use before function declaration
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5));