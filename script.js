// Write your code here
/*
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector("h3.subtitle");
var count = 0

lightbulb1.addEventListener("click", function(){
    count ++;
    subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    lightbulb1.classList.toggle("active")// adds or removes (toggles) between active and not active
    // can do this.classList.toggle("active") aswell, it works the same.
})

lightbulb2.addEventListener("click", function(){
    count ++;
    subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    lightbulb2.classList.toggle("active")
})

lightbulb3.addEventListener("click", function(){
    count ++;
    subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    lightbulb3.classList.toggle("active")
})
*/

// Extension pt 1  - changing grammar so when the bulb has been clicked once, the subtitle says time instead of times.

const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector("h3.subtitle");
var count = 0

lightbulb1.addEventListener("click", function(){
    count ++;
    lightbulb1.classList.toggle("active");
    if(count === 1){
        subtitle.innerHTML= "You've  only clicked the lights "+ count +" time";  
    }
    else{
        subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    }  
})

lightbulb2.addEventListener("click", function(){
    count ++;
    lightbulb2.classList.toggle("active");
    if(count === 1){
        subtitle.innerHTML= "You've clicked the lights "+ count +" time";  
    }
    else{
        subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    }  
})

lightbulb3.addEventListener("click", function(){
    count ++;
    lightbulb3.classList.toggle("active");
    if(count === 1){
        subtitle.innerHTML= "You've clicked the lights "+ count +" time";  
    }
    else{
        subtitle.innerHTML= "You've clicked the lights "+ count +" times";
    }  
})