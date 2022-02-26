module.exports = function check(str, bracketsConfig) {
  let openBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8']
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i]
    
    if (currentBracket === '|' && stack[stack.length - 1] === '|' 
      || currentBracket === '7' && stack[stack.length - 1] === '7' 
      || currentBracket === '8' && stack[stack.length - 1] === '8'){
      stack.pop()
    } else if (openBrackets.includes(currentBracket)) {
      stack.push(currentBracket)
    } else if (stack.length === 0) {
      return false
    } else {
      for (let j = 0; j < bracketsConfig.length; j++) {
        let closeBracket = bracketsConfig[j][1]
        if (closeBracket === currentBracket) {
          let lastBracketFromStack = stack[stack.length - 1]
          if (lastBracketFromStack === bracketsConfig[j][0]) {
            stack.pop()
            break
          } else {
            return false
          }
        }
      }
    }
  } 

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}