
const coding = ["Js","ruby","java","python","cpp"]


// coding.forEach( function (item,index,arr){ console.log(item,index,arr)})



// coding.forEach( function (item){ console.log(item)})
// coding.forEach((item)=>{ console.log(item)})

const myCoding = [
    {languageName : "javascript",
        ext:"js"
    },
    {languageName : "c++",
        ext:"cpp"
    },
    {languageName : "python",
        ext:"py"
    }]
// myCoding.forEach((item)=>{console.log(item.languageName,item.ext)})



///
const myNums = [1,2,3,4,5,6,7]
// const newNums = myNums.filter((num)=>(num > 4)) // call back function
// console.log(newNums)


const newNums = []
myNums.forEach((num)=>{
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums)
