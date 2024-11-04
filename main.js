let btn = document.querySelector(".btn")

let randomClick = Math.floor(Math.random() * 2)

let randomBtn = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"]




let count = 1
let index;
/////btn lar

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

function aylanish() {
   if (count === 1 && randomBtn.length > 0) {
      let botBtn = randomBtn[Math.floor(Math.random() * randomBtn.length)];
      document.getElementById(botBtn).textContent = "0";
        document.getElementById(botBtn).addEventListener("click", (event) => {
            if (event.target.textContent === "0") {
                event.preventDefault(); 
                return; 
            }
            event.target.textContent = "X";
           }, { once: true });
      let index = randomBtn.indexOf(botBtn);
   if (index !== -1) {
    randomBtn.splice(index, 1);
}
      count = 0;
   }
}
let hisob;
   if(count === 1){
      // switch(botBtn) {
      // case "btn1":
      //    btn1.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);
      //    break;

      // case "btn2":
      //    btn2.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn2);

      //    break;
      // case "btn3":
      //    btn3.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn3);

      //    break;

      // case "btn4":
      //    btn4.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn4);

      //    break;

      // case "btn5":
      //    btn5.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);

      //    break;

      // case "btn6": 
      //    btn6.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);

      //    break;

      // case "btn7":
      //    btn7.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);

      //    break;
      // case "btn8":
      //    btn8.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);

      //    break;
      // case "btn9":
      //    btn9.textContent = "0"
      //    count = 0
      //    randomBtn.pop(btn1);

      //    break;
      // }
   } 

btn1.addEventListener("click", () => {
   count = 1
   btn1.textContent = "X"
    index = randomBtn.indexOf(btn1);
   if (index !== -1) {
    randomBtn.splice(index, 1);
    console.log(randomBtn)
}   aylanish()

}, { once: true }) 
/////
  
btn2.addEventListener("click", () => {
   count = 1
      btn2.textContent = "X"
 index = randomBtn.indexOf(btn2);
if (index !== -1) {
    randomBtn.splice(index, 1);
}      aylanish()


}, { once: true }) 
////////

  
btn3.addEventListener("click", () => {
   count = 1
   btn3.textContent = "X"
 index = randomBtn.indexOf(btn3);
if (index !== -1) {
    randomBtn.splice(index, 1);
}      aylanish()

}, { once: true }) 

//////

  
btn4.addEventListener("click", () => {
   count = 1
   btn4.textContent = "X"
 index = randomBtn.indexOf(btn4);
if (index !== -1) {
    randomBtn.splice(index, 1);
}      aylanish()

}, { once: true }) 

//////

  
btn5.addEventListener("click", () => {
   count = 1
   btn5.textContent = "X"
 index = randomBtn.indexOf(btn5);
if (index !== -1) {
    randomBtn.splice(index, 1); 
}      aylanish()

}, { once: true }) 

//////
btn6.addEventListener("click", () => {
   count = 1
   btn6.textContent = "X"
 index = randomBtn.indexOf(btn6);
if (index !== -1) {
    randomBtn.splice(index, 1);
}      aylanish()

}, { once: true }) 
////////
  
btn7.addEventListener("click", () => {
   count = 1
   btn7.textContent = "X"
 index = randomBtn.indexOf(btn7);
if (index !== -1) {
    randomBtn.splice(index, 1); 
}      aylanish()

}, { once: true }) 
//////
btn8.addEventListener("click", () => {
   count = 1
   btn8.textContent = "X"
 index = randomBtn.indexOf(btn8);
if (index !== -1) {
    randomBtn.splice(index, 1);
}      aylanish()

}, { once: true }) 
/////  
btn9.addEventListener("click", () => {
   count = 1
   btn9.textContent = "X"
 index = randomBtn.indexOf(btn9);
if (index !== -1) {
    randomBtn.splice(index, 1); 
}      aylanish()


}, { once: true }) 

////////

  



// btn1.addEventListener("count = 1
//  }, { once: true }) // btn2.addEventListener("click", () => {
// count = 1
// console.log(randomClick)
// })

// btn3.addEventListener("click", () => {
// console.log(randomClick)
// })

// btn4.addEventListener("click", () => {
// console.log(randomClick)
// })

// btn5.addEventListener("click", () => {
// console.log(randomClick)
// })