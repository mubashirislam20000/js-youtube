// arrays

const arr = [1,1.5,true,"hello"]
// console.log(arr)
// console.log(arr[1])

// shallow copy
// same referce point

let arr1 = arr 
// console.log(arr1)
arr1[2] = false
// console.log(arr)
// console.log(arr1)

const myArr2 = new Array(1,2,3,4,5)
myArr2.push(6)
// console.log(myArr2)
myArr2.pop()
// console.log(myArr2)
myArr2.unshift(9)
// console.log(myArr2)
myArr2.shift()
// console.log(myArr2)

// console.log(myArr2.includes(9))
// console.log(myArr2.indexOf(9))

const newArr = myArr2.join()
// console.log(myArr2)
// console.log(newArr)
// console.log(typeof newArr)


// slice ,splice

console.log("A ",myArr2)

const myn1 = myArr2.slice(1,3)
console.log("B ",myArr2)
console.log(myn1)

const myn2 = myArr2.splice(1,3)
console.log("C ",myArr2)
console.log(myn2)








