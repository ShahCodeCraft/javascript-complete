// const coding = ["Js","Ruby","Java","Python"]
// const values = coding.fo
// rEach( (item) =>{
//     // console.log(item)
//     return item
// } )
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10];

// By using filter

// const newNums = myNums.filter( (num,) => num > 4 )

// const newNums = myNums.filter( (num,) => {
//    return num > 4 
// })

// By using ForEach

// const newNums = [];
// myNums.forEach( (num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums)

const books = [
    {title : "Book one", genre : "Fiction", publishe : 1982, edition : 2004},
    {title : "Book two", genre : "Non-Fiction", publishe : 1984, edition : 2006},
    {title : "Book three", genre : "History", publishe : 1986, edition : 2008},
    {title : "Book four", genre : "Science", publishe : 2011, edition : 20010},
    {title : "Book five", genre : "Fiction", publishe : 1990, edition : 2012},
    {title : "Book six", genre : "Non-Fiction", publishe : 2007, edition : 2014},
    {title : "Book seven", genre : "Science", publishe : 1994, edition : 2016},
    {title : "Book eight", genre : "History", publishe : 2009, edition : 2018},
]

// const userBooks = books.filter( (book) => book.genre === "History")
// const userBooks = books.filter((book)=>(book.publishe >= 2000))

// const userBooks = books.filter((book)=>{
//     return book.publishe >= 2000
// })

const userBooks = books.filter((book)=>{
    return book.publishe >= 2000 && book.genre === "History"
})
console.log(userBooks);