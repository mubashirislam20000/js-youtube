const tinderUser = new Object()  // Singleton Object
// const tinderUser = {}  // Non Singleton Object

// console.log(tinderUser)

tinderUser.id = 1234
tinderUser.name = "Samay"

// console.log(tinderUser)

const regularUser = {
    email : "somer@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Hitesh",
            lastname : "chaudhary"

        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)


// merge two objects

const obj1 = { 1 : "a", 2 : "b"}
const obj2 = { 3 : "a", 4 : "b"}

const obj3 = Object.assign({},obj1,obj2) // {} if empty bracket is not given all the changes made in obj1
// console.log(obj3)
// console.log(obj1)
// console.log(obj2)

const obj4 = {...obj1,...obj2} // spread operator
// console.log(obj4)


// mostly used in database
const users = [
    {id : 1,
     email: "h@gmail.com"   
    },
    {id : 2,
     email: "hz@gmail.com"  },
    {id : 3,
     email: "hzz@gmail.com"  },

]
// console.log(users[0])


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))