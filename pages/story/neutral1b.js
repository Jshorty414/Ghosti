function one() {
var text = document.getElementById("textBox")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")

text.innerHTML = "You decide to just let it go, you can’t remember what it was anyways.";

  button1.style.opacity = "0";
  button2.style.opacity = "1";
  button1.style.top = "70%" ; 
  button2.style.top = "80%" ;
  
} 


function two() {
var text = document.getElementById("textBox")
var button2 = document.getElementById("button2")


text.innerHTML = "Demo Complete. Thank you for playing!";

 button2.style.opacity = "0";
 button2.style.top = "70%" ; 

  
} 
