//jQuery
function disableCheck(){
  if ($("#extra").length)
  {
    $("#remove").removeClass('disabled');
  }else{
    $("#remove").addClass('disabled');
  }
};

$(document).ready(function() {
  disableCheck();
});

// Animation
// $("#roll").click(function() {
//   $("h1").toggleClass('spin');
// });

// Add function
$("#add").click(function(){
  var i = 0;

  $("#dice").append('<div id="extra" class="row"><div class="col-xs-5"></div><div class="panel panel-default col-xs-2 numbers"><h1 id="result' + i + '">1</h1><br/></div><div class="col-xs-5"></div>');
  i++;

  disableCheck();
});

// Remove function
$("#remove").click(function() {
  $("#extra").remove();
  disableCheck();
});

//JavaScript
// Main algorithm for rolling dice
var number = 0;
function randomRange(myMin, myMax) {
  number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return number;
}

function displayNum() {
  document.getElementById("result").innerHTML = randomRange(1,6);
}
