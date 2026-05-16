
function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
    console.log()
}

// sayMyName //reference
// sayMyName() // execution

function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}
// addTwoNumbers(50,undefined)

function addTwoNumber(num1,num2){
    return (num1 + num2)
}
const x = addTwoNumber(5,7)
// console.log(x)


// rest operstors
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))


// pass object in function
const user = {
    username : "Sam",
    price : 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({username : "Rahul",price : 500})


// pass array in function

const myArr = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr))