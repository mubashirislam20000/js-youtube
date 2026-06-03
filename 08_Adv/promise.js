
h1.style.fontSize = "xxx-large"




// promise resolved 
// let p1 = new Promise((res,rej)=>{
//     console.log("p1 executed")
//     res(123)
// });

// promise rejected
// let p2 = new Promise((res,rej)=>{
//     console.log("p2 executed")
//     rej("U got an Error MD")
// });


// ///////////////////////////////////////////////////////////
// function get_Data(num,getNewData){
//     return new Promise((resolved,rejected)=>{
//         // console.log("Data fetching")
//         setTimeout(()=>{
//             // console.log(num)
//             // resolved("run sucessfully")
//             // rejected("!!!!!!!!!!!")
//             if(getNewData){
//                 getNewData()
//             }
//         },5000)
//     })
// }

// get_Data(10,()=>(get_Data(100)))


// /////////////////////////////////////////////////////////////////////////
// let getPromise = ()=>{
//     return new Promise((res,rej)=>{
//         console.log("im promise")
//         res("success")
//         // rej("errorrrrrrrrrr")
//     })
// }

// let p = getPromise()
// p.then((res)=>{
//     console.log("promise fullfileed",res)
// })
// p.catch((err)=>{
//     console.log("Error Catched",err)
// })



///////////////////////////////////////////////////////////
//promise chaning
// let asyncData1 = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Data1")
//             res("Done")
//         },3000)
//     })
// }
// let asyncData2 = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Data2")
//             res("Done")
//         },3000)
//     })
// }
// console.log("fetching data1")
// asyncData1().then((res)=>{
//     console.log(res)
//     console.log("fetching data2")
//     asyncData2().then((res)=>{
//         console.log(res)
// })
// })





////////////////////////////////////////////////////////////////////////////////
function get_Data(num){
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            console.log(num)
            resolved("run sucessfully")
        },3000 )
    })
}

// get_Data(111).then((res)=>{
//     console.log(res)
//     get_Data(1000).then(()=>{
//             console.log(res)
//         })
//     }
//     )

// get_Data(1)
// .then((res)=>{
//     return get_Data(2)
// }).then((res)=>{
//     console.log(res)
// })




















