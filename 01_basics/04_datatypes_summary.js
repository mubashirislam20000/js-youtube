// // const id = Symbol("123")
// // const aid = Symbol("123")
// // console.log(id)
// // console.log(typeof aid)
// // console.log(id === aid)

// // const bigNum = 9343543354684638466n  // bigint
// // console.log(typeof bigNum)


// // reference (non primitive)
// // array, objects , functions

// const heros = ["spiderman","hulk","Thor"]
// console.log(heros)
// console.log(typeof heros) 

// let myObj = {
//     name:"md",
//     age:25,
// }
// console.log(myObj) 
// console.log(typeof myObj) 




// const myFunction = function(){
//     console.log("Hello World")

// }
// console.log(typeof xyz)
// console.log(typeof null)
// console.log(typeof myObj)
// console.log(typeof myFunction)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* ****************Memory******************************************* */

// Stack( Primitive) ,  Heap(Non-Primitive )

let myYoutube = "hiteshchoudharydotcom"
let anotherYoutube = myYoutube
anotherYoutube = "chaiaurcode"

console.log(myYoutube)
console.log(anotherYoutube)


let userOne = {
    email : "srk@gmail.com",
    upi : "srk@ybl"

}
let userTwo = userOne

console.table([userOne,userTwo])

userTwo.email= "srkhan@gmai.com"
console.table([userOne,userTwo])
