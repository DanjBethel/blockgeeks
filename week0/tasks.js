// Task 1: Repeating Numbers

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

// Task 2: Conditional Sums

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

// Task 3: Talking Calendar

var talkingCalendar = function(date) {
  var splitDate = date.split('/');
  var months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }

  var formatDate = function(n) {
    var identifier = n.charAt(n.length - 1);
    var ending = '';

    if(identifier == '1' && n.charAt(0) != '1') {
      ending = 'st,';
    } else if(identifier == '2'){
      ending = 'nd,';
    } else if(identifier == '3'){
      ending = 'rd,';
    } else {
      ending = 'th,';
    }

    n = n.charAt(0) == '0' ? n.substr(1) : n;

    return n + ending;
  }

  var year = splitDate[0];
  var month = splitDate[1];
  var nDate = formatDate(splitDate[2]);

  return months[month] + ' ' + nDate + ' ' + year;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// Task 4: Challenge Calculator

var calculateChange = function(total, cash) {
  var diff = cash - total;
  var output = {};
  var money = {
    "twenty": 2000,
    "ten": 1000,
    "fiveDollar": 500,
    "twoDollar": 200,
    "dollar": 100,
    "quarter": 25,
    "dime": 10,
    "nickel": 05,
    "penny": 1
  }

  var dividers = Object.entries(money);

  for(var i = 0; i < dividers.length; i++) {
    var divisible = Math.floor(diff / dividers[i][1]);
    if(divisible != 0) {
      output[dividers[i][0]] = divisible;
      var withdraw = dividers[i][1] * divisible;
      diff -= withdraw;
    }
  }

  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));