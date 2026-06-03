const h1 = document.querySelector("h1")
h1.style.backgroundColor = "green"
h1.style.color = "yellow"
document.querySelector("body").style.backgroundColor="#414121"

const img = document.querySelector("#cat-img");
const button =  document.querySelector("button")

// document.querySelector("").style.boxSizing = "content-box"

const URL = "https://api.thecatapi.com/v1/images/search"

const getfacts = async () => {
    let response = await fetch(URL)
    let data = await response.json()
    
    // console.log(data[0].url)
    img.src = data[0].url;
  }


//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

//     img.src = data[0].url;
//   })

// }
button.addEventListener("click",getfacts)
// getfacts()