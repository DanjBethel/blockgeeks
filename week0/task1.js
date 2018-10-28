// Repeating Numbers

var repeatNumbers = function(data) {
  var compiledArray = [];
  var seperator = data.length > 1 ? ', ' : '';

  for(var x = 0; x < data.length; x++) {
    var repeatedValue = data[x][0]; //Value to repeat
    var repeatedTimes = data[x][1]; // Number of times to repeat "repeatedValue"

    var box = [];

    for(var i = 0; i < repeatedTimes; i++) {
      box.push(repeatedValue);
    }

    compiledArray.push(box.join(''));
  }

  return compiledArray.join(seperator);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));