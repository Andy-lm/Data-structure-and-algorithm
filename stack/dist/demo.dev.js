"use strict";

var isValid = function isValid(s) {
  var stack = [];

  if (stack.length % 2 === 1) {
    return false;
  }

  for (var i = 0; i <= s.length - 1; i++) {
    var str = s[i];

    if (str === "(" || str === "{" || str === "[") {
      stack.push(str);
      console.log(stack);
    } else if (stack[stack.length - 1] === "(" && str === ")" || stack[stack.length - 1] === "[" && str === "]" || stack[stack.length - 1] === "{" && str === "}") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("(]"));