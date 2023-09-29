//  Date 

let myDate = new Date();
console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString(),typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023 , 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth())
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
    weekday:"long",
    
})