
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)


let myCreatedDate =  new Date(2023,0,23)
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

let date = new Date();
// console.log(date.toTimeString())



let indiaTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
});

// console.log(indiaTime);


let myCreatedDate1 = new Date("2026-05-14")
// console.log(myCreatedDate1)


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate1.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth())


