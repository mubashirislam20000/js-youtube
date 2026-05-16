// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // declaration of symbol

const jsUser = {
    name : "Hitesh",
    "sur name" : "Chaudhary",
    [mySym] : "myKey1",
    age : 18,
    location : "Jaipur",
    isLoggedIn : false,
    lastLoginDays : ["Mon","Wed","Thu"]
}

// console.log(jsUser.name)
// console.log(jsUser["sur name"]) // u cannot acces sur name jsUser.sur name
// console.log(jsUser["age"])

// how to access symbol as a key in object
// console.log(jsUser[mySym])

jsUser.age = 25
// Object.freeze(jsUser)
jsUser.age = 55
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JsUser")
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name} ${this["sur name"]}`) // if u want to access same object variable u can use "this"
}
console.log(jsUser.greetingTwo())