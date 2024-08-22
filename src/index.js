// module.exports = function check(exp) {


//   const pairs = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//     '1':'1',
//     '2':'2',
//     '3':'3',
//     '4':'4',
//     '5':'5',
//     '6':'6',
//     '7':'7',
//     '8':'8',
//     '9':'9',
// },      
// open = []

// for (let i = 0; i < exp.length; i++)
//     if (pairs[exp[i]]){
//       console.log(exp[i]);
//       open.push(exp[i]);
//     }
//     else if (exp[i] === pairs[open[open.length - 1]]){
//         open.pop();
//     }
// return !open.length
// }

module.exports = function check(str, bracketsConfig) {

    let originString;
  do{
    originString = str;
    console.log(originString)
    bracketsConfig.forEach((bracket) => {
    console.log(str);
    str = str.replace(bracket.join(''), '');
    })
  } while (originString !== str)

  return str.length === 0;

    
  }



