$(document).ready(function() {
  // Variable for numbers displayed on screen
  var disStr = "";
  // Variable for numbers to perform mathmatical equations on
  var mathStr = "";


  // Initial calculator setup
  clearDis();
  
  // Button click events
  $(".button").click(function() {
    
    // Variable for button values
    var value = $(this).val();
    
    // Event if first button pushed is "0"
    if (disStr === "" && value === "0") {
      disStr = "";
      mathStr += value;
      $(".screen").empty();
      screenDis(0);
    } 
    
    // Event if first button pushed is a number
    else if (disStr === "" && !isNaN(value)) {
      disStr += value;
      mathStr += value;
      $(".screen").empty();
      screenDis(disStr);
     } 
    
    // Event if clear button is pushed
    else if (value === "c") {
      clearDis();
    } 
    
    // Event if square root button is pushed
    else if (value === "sqrt") {
      mathStr = Math.sqrt(Number(mathStr)).toString();
      disStr = "";
      $(".screen").empty();
      screenDis(mathStr.substring(0, 9));
     } 
    
    // Event if percentage button is pushed
    else if (value === "%") {
      mathStr = (Number(mathStr) / 100).toString();
      disStr = "";
      $(".screen").empty();
      screenDis(mathStr.substring(0, 9));
    }
    
    // Event if mathmatical operator is pushed
    else if (value === '/' ||
             value === '*' ||
             value === '-' ||
             value === '+'){
        if (!isNaN(mathStr.substr(mathStr.length - 1))){
          disStr = "";
          mathStr += value
        } 
     } 
    
    // Event if equals button is pushed
    else if (value === '='){
        mathStr = eval(mathStr).toString();
        disStr = "";
        $(".screen").empty();
        screenDis(mathStr.substring(0, 9));
      }
     
    // Event if decimal button is pushed
     else if(value === '.'){
        if (disStr.indexOf(".") === -1){
            disStr += value;
            mathStr += value;
            $(".screen").empty();
            screenDis(disStr.substring(0, 9));
          }
      }
    
    // Event for every other event
    else {
      disStr += value;
      mathStr += value;
      $(".screen").empty();
      screenDis(disStr.substring(0, 9));
    }
  });
  
  // Function to display numbers on screen
  function screenDis(num) {
    $(".screen").append(num);
  }
  
  // Function to clear display
  function clearDis() {
    mathStr = "";
    disStr = "";
    $(".screen").empty();
    screenDis(0);
  }
});