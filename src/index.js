module.exports = function check(exp) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|',
},      
open = []

for (let i = 0; i < exp.length; i++)
    if (pairs[exp[i]]){
      console.log(exp[i]);
      open.push(exp[i]);
      
    }
    else if (exp[i] === pairs[open[open.length - 1]]){
        open.pop();
    }
return !open.length
}

