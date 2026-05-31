
const body = document.querySelector("body")
const button = document.querySelectorAll(".button")
const h2 = document.querySelector("h2")

button.forEach((box)=>{
  box.addEventListener("click",function(evt){
      body.style.backgroundColor = evt.target.id
      if (evt.target.id === "black"){
        h2.style.color = "red"
      }
      else{
        h2.style.color = "black"

      }
  })
})

