function one() {
var text = document.getElementById("textBox")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")

text.innerHTML = "You wait and watch until he leaves.";

  button1.style.opacity = "0";
  button2.style.opacity = "1";
  button1.style.top = "70%" ; 
  button2.style.top = "80%" ;
  
} 


function two() {
var text = document.getElementById("textBox")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")

 text.style.opacity = "0";
 button2.style.opacity = "0";
 button3.style.opacity = "1";
 button2.style.top = "70%" ; 
 button3.style.top = "80%" ;
  
} 

function three() {
var text = document.getElementById("textBox")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")


text.innerHTML = "Good job you could’ve scared him to all heck, but you didn’t! ";


 text.style.opacity = "1";
 button3.style.opacity = "0";
 button4.style.opacity = "1";
 button3.style.top = "70%" ; 
 button4.style.top = "80%" ;

} 

function four() {
var text = document.getElementById("textBox")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var bed = document.getElementById("bed")
var back = document.getElementById("back")

text.innerHTML = "Oh but you didn’t get your package since you didn’t sign…";

 button4.style.opacity = "0";
 button5.style.opacity = "1";
 button4.style.top = "70%" ; 
 button5.style.top = "80%" ;
 bed.style.opacity = "0";
 back.style.opacity = "0";
}

function five() {
var text = document.getElementById("textBox")
var button5 = document.getElementById("button5")
var blip = document.getElementById("blip")
var neutral1a = document.getElementById("neutral1a")
var neutral1b = document.getElementById("neutral1b")

text.innerHTML = "Do you sneak the package out of the back while he’s not looking or just let it go.";

 blip.style.opacity = "1";
 button5.style.opacity = "0";
 button5.style.top = "70%" ; 
 neutral1a.style.opacity = "1";
 neutral1b.style.opacity = "1";
 neutral1a.style.top = "80%"; 
 neutral1b.style.top = "80%"; 
} 

