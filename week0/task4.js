// Challenge Calculator

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