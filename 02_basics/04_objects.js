// const tinderUser = new Object();   //This is singleto Object
const tinderUser = {};                // This is not-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Shah"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email :'shah@gmail.com',
    fullname : {
        userfullname : {
            firstname :'shah',
            lastname:'alam'
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);  

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1, obj2}
// let obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1, ...obj2}     //recommended
// console.log(obj3)

const users = [
    {
        id : 1 ,
        email: 'shah1@gmail.com'
    },
    {
        id : 2 ,
        email: 'shah2@gmail.com'
    },
    {
        id : 3 ,
        email: 'shah3@gmail.com'
    }
]


// console.log(users[0].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.id.hasOwnProperty("isLoghged"));


// ++++++++++++++++++++ Object Destructuring and JSON API ++++++++++++++++++++

const course = {
    coursename : "js in hindi",
    price : "999",
     courseInstructor : "Hitesh"
}

// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor:instructor} = course
console.log(courseInstructor)

//   {
//     "name" : "Shah",
//     "coursename" : "js in hindi",
//     "price" : "free"
//   }

[
    {},
    {},
    {}
]