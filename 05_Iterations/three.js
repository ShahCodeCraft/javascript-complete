// for_of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const num of arr) {
   console.log(num)
}

// const greetings = "Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// Maps 

const map = new Map();
map.set("IN","India")
map.set("USA","United States Of America")
map.set("Fr","France")
 
map.set("IN","India")   //Map containe unique value

// console.log(map)

// for(const key of map) {
//     console.log(key);
// }

//Destructure array

for(const [key,value] of map) {
    console.log(key, ":-", value);
}

// destructuring object

const myObject = {
    "game1": "NFS",
    "game2": "spiderman",
    "game3": "batman"
}

// for(const [key,value] of myObject){
//     console.log(key, ":-", value)
// }



