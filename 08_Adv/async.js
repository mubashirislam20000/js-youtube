// function api() {
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("WETHER DATA")
//             res(200)
//         },3000)
//     })
// }

// async function getWetherData(){
//     await api()
//     await api()
// }
// getWetherData()


async function getingData() {
    await get_Data(10)
    await get_Data(100)
    get_Data(300).then((res)=>{
        console.log(res)
    })
}
getingData()