var isValid = function(s) {
  let isParenthesisClosed = true;
  let isSquareBracesClosed = true;
  let isBracesClosed = true;
  let stack = [];
  for(const char of s){
  if(char === '('){
    isParenthesisClosed = false;
    stack.push(char);
  } else if(char === ')') {
    
    if(stack.pop() === '(') {
      isParenthesisClosed = true;
    } else {
      isParenthesisClosed = false;
      return false;
    }
    console.log(char, stack, isParanthesisClosed);

  } else if(char === '['){
    isSquareBracesClosed = false;
    stack.push(char);
  } else if(char === ']') {
    if(stack.pop() === '[') {
      isSquareBracesClosed = true;
    } else {
    isSquareBracesClosed = false;
      return false;
    }

    
  }else if(char === '{'){
    isBracesClosed = false;
    stack.push(char);
  } else if(char === '}') {
    if(stack.pop() === '{') {
      isBracesClosed = true;
    } else {
      isBracesClosed = false;
      return false;
    }
  }
  }
  
  return stack.length === 0 && isParenthesisClosed && isSquareBracesClosed && isBracesClosed;
    
};

// console.log(isValid('([)]')) //false
// console.log(isValid('{[]}')) //true
// console.log(isValid('({{{{}}}))')) //false
console.log(isValid("[[[]")) //false

//other solution
var isValid = function(s) {
  while (
    s.indexOf("{}") !== -1 ||
    s.indexOf("[]") !== -1 ||
    s.indexOf("()") !== -1
  ) {
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }
  return s === "";
};

//other solution best
var isValid = function(s) {
        
    if (s.length ==0 || s.length%2 != 0){
        return false;
    }
    
    const closingParentheses = Object.freeze({
        "(": ")",
        "{": "}",
        "[": "]"
    });
    
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        if (s[i] in closingParentheses) {
            stack.push(s[i]);
        }else if( s[i] != closingParentheses[stack.pop()]) {
            return false;
        }
    }
    
    return stack.length == 0;
};

//other best solution
function isValid(s) {
  const left = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);    
    } else if (legend[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? 0 : 1;
};