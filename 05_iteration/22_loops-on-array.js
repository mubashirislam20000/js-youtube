// for of

const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element)
// }

// map

const map = new Map()

map.set("IN","India")
map.set("UK","United Kingdom")
map.set("USA","United State Of America")

// console.log(map)

// for (const [key,value] of map){
//     console.log(key,value)
// }

const myObj = {
    name : "Md",
    id : 1945,
    city : "Goa"
}


// myObj is not iterable

// for(const ele of myObj){
//     console.log(ele)
// }

// for in

for (const key in myObj) {
    console.log(key,myObj[key]) 
}

// for in not work on map



