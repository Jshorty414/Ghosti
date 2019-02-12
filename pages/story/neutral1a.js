function one() {
var text = document.getElementById("textBox")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var you = document.getElementById("you")

text.innerHTML = "You float out and stealthly get the package out of the back when he's not looking.";

  button1.style.opacity = "0";
  button2.style.opacity = "1";
  button1.style.top = "70%" ; 
  button2.style.top = "80%" ;
  you.style.opacity = "0";
} 


function two() {
var text = document.getElementById("textBox")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var you = document.getElementById("you")
var bed = document.getElementById("bed")

text.innerHTML = "You come back inside proud of your sneakiness and go to your bedroom.";
 bed.style.opacity = "1";
 button2.style.opacity = "0";
 button3.style.opacity = "1";
 button2.style.top = "70%" ; 
 button3.style.top = "80%" ;
 you.style.opacity = "1";
} 

function three() {
var text = document.getElementById("textBox")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var blip = document.getElementById("blip")

text.innerHTML = "Once again Blip appears startling you.";

 blip.style.opacity = "1";
 button3.style.opacity = "0";
 button4.style.opacity = "1";
 button3.style.top = "70%" ; 
 button4.style.top = "80%" ;

  
} 


function four() {
var text = document.getElementById("textBox")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")

text.innerHTML = "Nice job! So.. I gotta ask, what did ya get??";


 button4.style.opacity = "0";
 button5.style.opacity = "1";
 button4.style.top = "70%" ; 
 button5.style.top = "80%" ;
} 

function five() {
var text = document.getElementById("textBox")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")
var aHat = document.getElementById("aHat")

text.innerHTML = "You pull out a dad hat with a halo attached to it.";

 aHat.style.opacity = "1";
 button5.style.opacity = "0";
 button6.style.opacity = "1";
 button5.style.top = "70%" ; 
 button6.style.top = "80%" ;

} 


function six() {
var text = document.getElementById("textBox")
var button6 = document.getElementById("button6")
var button7 = document.getElementById("button7")

text.innerHTML = "Blip: Huh, how fitting.";


 button6.style.opacity = "0";
 button7.style.opacity = "1";
 button6.style.top = "70%" ; 
 button7.style.top = "80%" ;

} 


function seven() {
var text = document.getElementById("textBox")
var button7 = document.getElementById("button7")

text.innerHTML = "Demo Complete. Thank you for playing!";

 button7.style.opacity = "0";
 button7.style.top = "70%" ; 
 
} 
