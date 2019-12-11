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
    return '[' + stringArr + ']';
  }

  // if object
  if (typeof obj === 'object') {
    // create empty string object
    var stringObj = '';
  
    // create variable to grab all keys in obj
    var objKeys = Object.keys(obj);

    // helper function for each
    objKeys.forEach (function (k) {
      // typeof edge cases for keys and values undefined and function
      if (typeof k === 'function' || typeof k === undefined || typeof obj[k] === 'function' || typeof obj[k] === 'undefined') {
        return '';
      } else {
      // otherwise all to string object stringify key and value format
        stringObj += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      }
    });
    // return in stringobject using slice for stringobj length
    return '{' + stringObj.slice(0, stringObj.length - 1) + '}';
  }
  // return obj
  return obj;



};



