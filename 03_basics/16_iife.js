//  Immediately Invoked Function Expression (IIFE)

// ()() // IIFE


(function chai(){ // named iife
    console.log("DB connected")
})();

(()=>(console.log("DB CONNECTED 2")))();

((user)=>(console.log(`Good Morning,${user}!!! `)))("Md");
