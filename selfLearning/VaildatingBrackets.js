function isValid(s) {
    const stack = [];
    const bracketMap = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (stack.pop() !== bracketMap[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));  