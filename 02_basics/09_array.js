const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(dc_heros)
// console.log()

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_New_Heros = [...marvel_heros,...dc_heros]
console.log(all_New_Heros)


const arr1 = [1,2,3,[4,5,6],[7,8,[9,10,[11,12]]]]
console.log(arr1)
const arr2 = arr1.flat(Infinity)
console.log(arr2)


// used in webScrapping
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // convert the string into array

// interesing case
console.log(Array.from({name : "Hitesh"})) // return empty list



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))