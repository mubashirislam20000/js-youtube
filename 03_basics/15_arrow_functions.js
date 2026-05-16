
const user = {
    name : "Hitesh",
    id : 1234,
    greeting : function(){
        console.log(`${this.name} welcome to the website, user id ${this.id}`)  // this is used
        console.log(this)  // this is used
    }
}

// console.log(user)
// console.log(user.greeting())
// console.log(this)


// function chai(){
//     let username = "Hitesh"
//     console.log(this)
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let Username = "Hitesh"
//     console.log(this)
//     console.log(this.username)
// }
// chai()



const chai = () => {   // arrow function
    let Username = "Hitesh"
    console.log(this.username)
    console.log(this)
}
// chai()


const arr = [2,5,3,7,6]
const x = arr.forEach((num)=>(num**2))
console.log(x)