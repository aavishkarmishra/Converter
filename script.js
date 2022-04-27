'use strict';
function submit() {
  var inputFormat = parseInt(document.getElementById('inputFormat').value);
  var outputFormat = parseInt(document.getElementById('outputFormat').value);
  var input = document.getElementById('input').value;
  var output;
  if (input == '') {
    output = 'Input Required';
  } else if (inputFormat == outputFormat) {
    ouptut = input;
  } else {
    output = format(input, inputFormat, outputFormat);
  }

  document.getElementById('output').value = output;
}

function swap() {
  var inputFormat = document.getElementById('inputFormat').value;
  var outputFormat = document.getElementById('outputFormat').value;
  document.getElementById('inputFormat').value = outputFormat;
  document.getElementById('outputFormat').value = inputFormat;
}

function format(input, inputFormat, outputFormat) {
  var temp, output;
  switch (inputFormat) {
    case 1:
      temp = parseInt(input, 2);
      break;
    case 2:
      temp = parseInt(input, 8);
      break;
    case 3:
      temp = parseInt(input, 10);
      break;
    case 4:
      temp = parseInt(input, 16);
      break;
  }
  switch (outputFormat) {
    case 1:
      output = temp.toString(2);
      break;
    case 2:
      output = temp.toString(8);
      break;
    case 3:
      output = temp.toString(10);
      break;
    case 4:
      output = temp.toString(16);
      break;
  }
  return output;
}
