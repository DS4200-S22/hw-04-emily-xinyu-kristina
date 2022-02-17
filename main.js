
let count = 0;
function circle1Clicked() {
  ++count;
  let circleText = document.getElementById("circle1-text");
  circleText.innerHTML = count;
}


const circle2 = document.getElementById("circle2");
circle2.addEventListener("mouseover", mouseOver);
function mouseOver() {
  circle2.style.stroke = "black";
}
circle2.addEventListener("mouseout", mouseOut);
function mouseOut() {
  document.getElementById("circle2").style.stroke = "none";
}


const circle3 = document.getElementById("circle3");

function circle3Clicked() {
  if (circle3.style.opacity=="1") {
     circle3.style.opacity="0"; 
  }
  else { 
    circle3.style.opacity="1";
       }
}