// Talking Calendar

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