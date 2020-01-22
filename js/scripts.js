$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("input#userInput").val();
    var inputArray = input.split('');
    var reverseArray = inputArray.reverse();
    var finalStr = reverseArray.join('');
    if (finalStr === input) {
      $("#output").text("Yes, it's a palindrome");
    } else {
      $("#output").text("No, it's NOT a palindrome");
    }
  });  
});