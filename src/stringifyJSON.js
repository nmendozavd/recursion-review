// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // edge case
  if (obj === null) {
    return 'null';
  }
  // if string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // if number or boolean
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj + '';
  }
  // if function or undefined 
  if (typeof obj === 'function' || typeof obj === 'undefined' ) {
    return '';
  }
  // if array
  if (Array.isArray(obj)) {
    var stringArr = [];

    // helper function forEach iterates over each element
    obj.forEach(function (element) {
      stringArr.push(stringifyJSON(element));
    });
    return '[' + stringArr.toString() + ']';
  }

  // if object
  if (typeof obj === 'object') {
    // create empty string object
    // create variable to grab all keys in obj

    // helper function for each 
    // typeof edge cases for keys and values undefined and function 
    // return empty string if any are true
    // otherwise all to string object stringify key and value format

    // return in object string
  }

  
  // return obj using toString();

};
