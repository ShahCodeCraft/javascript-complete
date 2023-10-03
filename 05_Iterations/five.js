const coding = ["Js","Ruby","Java","Python","React"]

// coding.forEach( function (val){ 
//     console.log(val)
// })

// coding.forEach( (val) =>{ 
//     console.log(val)
// })

// function printMe(val){ 
//     console.log(val)
// }
// coding.forEach(printMe);

// coding.forEach( (item,index,arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        langName : "Javascript",
        langFileName : "Js",
    },
    {
        langName : "Java",
        langFileName : "Java",
    },
    {
        langName : "Python",
        langFileName : "Py",
    },
]

myCoding.forEach( (item) =>{
    console.log(item.langName)
} )
