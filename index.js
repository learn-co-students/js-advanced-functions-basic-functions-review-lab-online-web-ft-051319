function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}

const Calculator = {
  add: (a,b) => {
    return a + b;
  },
  subtract: (a,b) => {
    return a - b;
  },
  multiply: (a,b) => {
    return a * b;
  },
  divide: (a,b) => {
    return a / b;
  },
}

function actionApplyer(start, array) {
  let a = start
  array.forEach((fn) => {
    a = fn(a)
  })
  return a
}
