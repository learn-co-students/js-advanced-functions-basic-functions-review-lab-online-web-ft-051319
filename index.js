// Your code here
function saturdayFun (activity = "roller-skate") {
  return "This Saturday, I want to "+ activity + "!"
}

let mondayWork = function(activity = "go to the office") {
  return "This Monday, I will " + activity + "."
}

/*
let wrapAdjective = function(quote = "*") {
  return function (emfatic ="special") {
    return `You are ${quote}${emfatic}${quote}!`
  }
}
*/

function wrapAdjective(quote="*") {
  return function innerWrapAdj(adjective="special") {
    return `You are ${quote}${adjective}${quote}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;

  },
  divide: function(a,b) {
    return a / b;
  },
}

let actionApplyer = function(startpt, fnArray) {
  let a = startpt;
  for (let i = 0; i < fnArray.length; i++) {
    a = fnArray[i](a)
  }
  return a;
}


wrapAdjective("%")("a dedicated programmer")
