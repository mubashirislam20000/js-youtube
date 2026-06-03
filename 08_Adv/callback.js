const h1 = document.querySelector("h1")
h1.style.color = "yellow"


// console.log("one")
// console.log("two")

// setTimeout(()=>(console.log("Winner")),2000) // 2sec -> 2000 msec  

// console.log("three")
// console.log("four")


function getData(id,getNextData){
    setTimeout(()=>{
        console.log("Data",id)
        if (getNextData) {
            getNextData()
        }
    },2500)   
}

// // setTimeout(()=>(getData(1256)),3000) // in callback function passing function with argument 

// // callback hell(nested callback)
// getData(123,()=>{
//     getData(12345,()=>{
//         getData(1234567)
//     })
// })