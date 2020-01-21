// Here is a list of functions, we need:
// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
    return number-parseInt(number) >= 0.5 ? parseInt(number)+1 : parseInt(number);
  };
  
  Math.ceil = function(number) {
    return number - parseInt(number) > 0 ? parseInt(number)+1 : parseInt(number);
  };
  
  Math.floor = function(number) {
    return parseInt(number)
  };

  