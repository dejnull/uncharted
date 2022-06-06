
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>dadaBday</title>
<style>
    body {
  background: #f5f5f5;
}
#timer {
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: #999;
  letter-spacing: -1px;
}
#timer span {
  font-size: 60px;
  color: #333;
  margin: 0 3px 0 15px;
}
#timer span:first-child {
  margin-left: 0;
}
</style>
<!-- bootstrap css -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!-- responsive meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>Test IT</h1>

<!-- Display random strings from list -->
<button onclick="generate()">Get your daily quote</button>
<p id="demo"></p>
<br>

<!-- show the current date and time -->
<div id="timer">
    <span id="days"></span>days
    <span id="hours"></span>hours
    <span id="minutes"></span>minutes
    <span id="seconds"></span>seconds
</div>
<br>
<hr>
<p id="daydate"></p>
<p id="countdown"></p>

<script>
function generate() {
    var list = ["Success is not final, failure is not fatal, It is the courage to continue that counts...", 
    "Don’t let yesterday take up too much of today...", 
    "Experience is a hard teacher because she gives the test first, the lesson afterwards...", 
    "Someone's sitting in the shade today because someone planted a tree a long time ago...", 
    "Life is like riding a bicycle. To keep your balance, you must keep moving...", 
    "The best way to predict your future is to create it...",
    "The best way to find yourself is to lose yourself in the service of others...",
    "A clever person solves a problem. A wise person avoids it...",
    "Reality is merely an illusion, albeit a very persistent one...",
    "We suffer more often in imagination than in reality...",
    "He suffers more than necessary, who suffers before it is necessary...",
    "Enjoy present pleasures in such a way as not to injure future ones...",
    "To improve is to change, so to be perfect is to change often..."];
    var randomElement = list[Math.floor(Math.random() * list.length)];
    document.getElementById("demo").innerHTML = randomElement;
}

// get current date and time
var date = new Date();
var day = date.getDate();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var hours = date.getHours();

var month = date.getMonth() + 1;
var year = date.getFullYear();

document.getElementById("daydate").innerHTML = hours;

// target date is 22 Jan
var remaining_days = 22 - day;
// to double check if the date is correct
var timeleft = 7
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

document.getElementById("days").innerHTML = remaining_days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

</script>
</body>
</html>