// Get the HTML element for the clock face
var clock = document.getElementById("clock");

// Set the size and position of the clock face
clock.style.width = "300px";
clock.style.height = "300px";
clock.style.position = "relative";

// Calculate the position of each number
var radius = 130;
var centerX = 150;
var centerY = 150;
var angle = -60;
var increment = 30;

for (var i = 1; i <= 12; i++) {
  var number = document.createElement("div");
  number.innerHTML = i;
  number.style.position = "absolute";
  number.style.width = "20px";
  number.style.height = "20px";
  number.style.textAlign = "center";
  number.style.borderRadius = "50%";
  number.style.color = "transparent";
  number.style.fontSize = "22px";
  number.style.textShadow = "2px 2px 1px blue";
  
  var x = centerX + radius * Math.cos(angle * Math.PI / 180);
  var y = centerY + radius * Math.sin(angle * Math.PI / 180);
  
  number.style.left = x - 12 +"px"; ////k + "px";
  number.style.top = y - 13+ "px";
  
  clock.appendChild(number);
  
  angle += increment;
}

const SecondsEI = document.getElementById("scnd");
const MinuteEI = document.getElementById("min");
const HourEI = document.getElementById("hour");
const tester = document.getElementById("tester");

setInterval(timer, "1000");

function timer() {
  const d = new Date()
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hour = d.getHours();

  const SecAngle = ((seconds * 6)-90) + "deg";
  const MinAngle = ((minutes * 6)-90) + "deg";
  const HourAngle = ((hour * 12 / 360)-90) + "deg";



  SecondsEI.style.transform = "rotate(" + SecAngle + ")";
  MinuteEI.style.transform = "rotate(" + MinAngle + ")";
  HourEI.style.transform = "rotate(" + HourAngle + ")";
  tester.innerHTML = SecAngle;

}





