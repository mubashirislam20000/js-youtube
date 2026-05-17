const myNumbers = [1,2,3,4,5,6]

const myNewNum = myNumbers.map((num)=>num*num)
console.log(myNewNum)




// chaining
const newNums = myNumbers.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num>40))
console.log(newNums)