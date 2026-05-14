const name = "Harry"
let repoCount = 1
console.log(`Hey, My Name is ${name.toUpperCase()} and my repoCount is ${repoCount}.`)

const gameName = new String("hiteshfc")
console.log(gameName)
console.log(gameName[0])


console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf("f"))

const newString = gameName.substring(0,4)
console.log(newString)


const anotherString = gameName.slice(-8,-1)
console.log(anotherString)


const newStringOne = "    hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

console.log()
const newStringTwo = "hitesh singh"
console.log(newStringTwo)
console.log(newStringTwo.replace("singh","king"))

console.log(newStringTwo.includes("singh"))


console.log("my name is khan".split(" "))
console.log("my name is khan".split(" ",2))

