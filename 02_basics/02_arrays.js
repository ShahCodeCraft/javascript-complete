const marvel_heros = ["Thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros)   // Its add Array under Array
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros);      // By using Concat method
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros];    //By using Spread operator
// console.log(all_new_heros);

// const another_array =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity);    // arrange all array value in in one array
// console.log(real_another_array);

console.log(Array.isArray("Shahnawaz"));
console.log(Array.from("Shahnawaz"));
console.log(Array.from({name:'Shahnawaz'})); // intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
