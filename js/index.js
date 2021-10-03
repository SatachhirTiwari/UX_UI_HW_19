console.log("I am getting loaded");

var myObj = { firstname : "Satachhi", lastname : "Tiwari" };
console.log(myObj);

var i = 0;
var speed = 50;
var text = ['a Bio-Medical Engineer turned Digital Designer','a happy go lucky girl', 'positive in attitude', 'thoughtful and emotional']; 
function callMe(){
    var myText = document.getElementById('myAnnimation'); 
    var curIdx = text.indexOf(myText.innerHTML); myText.innerHTML = text[(curIdx+1)%text.length];            
}
setInterval(callMe,2000);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  function topFunction() {
  
       $('html, body').animate({scrollTop:0}, 'slow');
  }
  

$(document).ready(function(){
    $('button').hover(function(){
      $(this).css("background-color", "indigo");
      $(this).css("color", "yellow");
      $(this).css("border", "3px solid yellow");      
      }, function(){
      $(this).css("background-color", "black");
      $(this).css("color", "white");
      $(this).css("border", ""); 
    });
  });