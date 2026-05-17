// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,curnt_value){
//     return acc + curnt_value
// },0) // 0 -> is acculmulator value(acc)
//console.log(myTotal)



// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,curnt_value){
//     console.log(`acc : ${acc} cur-val : ${curnt_value}`)
//     return acc + curnt_value
// },5)
// console.log(myTotal)



const shoppingCart = [
    {courseName :"js",
        price : 2999

    },
    {courseName :"python",
        price : 999

    },
    {courseName :"mobile dev",
        price : 3999

    },
    {courseName :"da and ai",
        price : 6999

    }
]
// console.log(shoppingCart)
const totalPrice = shoppingCart.reduce((acc,pr)=>(acc + pr["price"]),0)
console.log(totalPrice)