// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  let tempTimeArr = new Array()
  tempTimeArr = time.split(':');

  const exceptionMinutesObject = { 
    0: 'o clock',
    15: 'quarter',
    30: 'half'
  };

  const timeObject = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'thirty'
}

  if (mintues === 0 && timeObject[mintues] && hourObject[hour]) { 
    return hourObject[hour] + ' ' + timeObject[mintues];
  }

  if ((mintues === 15 || mintues === 30) && timeObject[mintues] && hourObject[hour]) { 
    return timeObject[mintues] + ' past ' + hourObject[hour]
  }

  if ((mintues > 1 && mintues < 30) && mintues[mintues] && hourObject[hour]) {
    return timeObject[mintues] + ' past ' + hourObject[hour]
  } else { 
    return timeObject[(60 - mintues)] + ' to ' + hourObject[hour]
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };