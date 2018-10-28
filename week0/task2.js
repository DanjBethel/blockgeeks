// Conditional Sums

var conditionalSum = function(values, condition) {
  var matchedValues = [];
  var total = 0;

  var even = function(number) {
    return number % 2 == 0;
  }

  var odd = function(number) {
    return number % 2 != 0;
  }

  for(var i = 0; i < values.length; i++) {
    if(condition == "even") {
      if(even(values[i])) {
        matchedValues.push(values[i]);
      }
    }
    if(condition == "odd") {
      if(odd(values[i])) {
        matchedValues.push(values[i]);
      }
    }
  }

  for(var x = 0; x < matchedValues.length; x++) {
    total+= matchedValues[x];
  }

  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));