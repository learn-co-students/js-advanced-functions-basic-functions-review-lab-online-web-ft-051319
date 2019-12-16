// Your code here
function saturdayFun(arg = 'roller-skate') {
  return `This Saturday, I want to ${arg}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
  return function(adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
}

//
// function actionApplyer(integer, array) {
//   let transformedInt = integer
//   if(array.length === 0) {
//     return transformedInt
//   }
//   else {
//     array.forEach(function(element) {
//       let int = element(integer)
//      transformedInt = int
//     })
//   }
//   return transformedInt
// }

function actionApplyer(start, array) {
  let a = start

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}
