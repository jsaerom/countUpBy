// Back-end Logic
var countTo = 0;
var countBy = 0;
var output = [];

function testInputValidity(to, by){
  var valid = false;
  if((to || to === 0) && (by || by === 0)
    && ((by > 0 && to >= by)
    || (by < 0 && to <= by)
    || (by === 0 && to === 0))){
    valid = true;
  }
  return valid;
}

function generateOutput(to, by) {
  output = [];
  if(testInputValidity(countTo, countBy)){
    if (to === by) {
      output.push(to);
    }
    else if (to > 0 && by > 0){
      for (var i = by; i <= to; i += by) {
        output.push(i);
      }
    }
    else {
      for (var i = by; i >= to; i += by) {
        output.push(i);
      }
    }
  }
  return output;
}

// Front-end Logic
$("form").submit(function(event){
  event.preventDefault();
  countTo = parseInt($("#countTo").val());
  countBy = parseInt($("#countBy").val());
  $("#output").text(generateOutput(countTo, countBy));
});
