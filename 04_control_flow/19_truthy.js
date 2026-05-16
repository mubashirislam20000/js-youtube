// falsy value
// false , 0 , -0 , BigInt 0n , "", null , undefined ,NaN

// truthy value
// "0", "false", " ", [] , {} , function(){}


// Nullish Coalescing Operator (??): null undefined   
let val1;
val1 = 5 ?? 10
console.log(val1)

let val2;
val2 = null ?? 10
console.log(val2)

let val3;
val3 = undefined ?? 15
console.log(val3)

let val4;
val4 = 20 ?? NaN
console.log(val4)

let val5;
val5 = NaN ?? 25
console.log(val5)

let val6;
val6 = null ?? undefined
console.log(val6)

let val7;
val7 = undefined ?? null
console.log(val7)



// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("grater than 80") : console.log("less than 80")
