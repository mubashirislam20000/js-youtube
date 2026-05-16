// // destructuring of object
// const course = {
//     coursename : "js in hindi",
//     price : 999,
//     courseInstructor : "Hitesh"
// }

// // console.log(course.courseInstructor)
 
// const {courseInstructor : instructor} = course
// // console.log(courseInstructor)
// console.log(instructor)

function User(name, age) {
  this.name = name
  this.age = age
}

const user1 = new User("Mubaseer", 20)
const user2 = new User("Ali", 25)

console.log(user1)
console.log(user2)