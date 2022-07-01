var date = new Date().getHours();

// Task-1
if (date > 6 && date < 12) {
  alert("Good Morning");
  document.body.style.backgroundColor = "yellow";
} else if (date > 12 && date < 18) {
  alert("Good Afternoon");
  document.body.style.backgroundColor = "green";
} else {
  alert("Good Night");
  document.body.style.backgroundColor = "black";
}
console.log(date);

// Task-2
//Area of Square
var lengthofsquare = 15;
console.log("Area of Square:" + Math.pow(lengthofsquare, 2));
//Area of Circle
var radius = 8;
console.log("Area of Circle:" + Math.round(Math.PI * Math.pow(radius, 2)));
