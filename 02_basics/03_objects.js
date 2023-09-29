//  singleton
// Object.create       //constructor method


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name : 'Shahnawaz',
    "full Name" : "Shahnawaz ALam",
    [mySym] : "mykey1",
    age : 18,
    location : 'Bihar',
    email : 'ershahalam@gmail.com',
    isLoggedIn : false,
    lastLoginDay : ["Monday","Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full Name);  //Not work
// console.log(jsUser["full Name"]);  // work
// console.log(jsUser[mySym],typeof jsUser[mySym]);  //type is as String not Symbol

// jsUser.email = 'shahalam@gmail.com';
// console.log(jsUser.email);
// Object.freeze(jsUser);    // after this we can not change email again
// jsUser.email = 'shahnawazalam@gmail.com';
// console.log(jsUser.email);
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User");
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this["full Name"]} `);
}
console.log(jsUser.greetingTwo())