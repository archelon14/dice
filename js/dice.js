//jQuery
// $(document).ready(function() {
//   if($("h1").hasClass('spin')){
//     $("h1").removeClass('spin');
//   }
// });

$("button").click(function() {
  //$("h1").toggleClass('spin');
  $("h1").css('animation-name','example');
  $("h1").css('animation-duration','.5s');
});

// Main algorithm for rolling dice
var number = 0;
function randomRange(myMin, myMax) {
  number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return number;
}

function displayNum() {
    document.getElementById("result").innerHTML = randomRange(1,6);
}
