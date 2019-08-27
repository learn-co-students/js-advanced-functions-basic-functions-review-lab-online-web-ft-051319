// Your code here
function saturdayFun(arg="roller-skate"){
  return `This Saturday, I want to ${arg}!`
}

function mondayWork(arg="go to the office"){
  return `This Monday, I will ${arg}.`
}

function wrapAdjective(flair="*"){
  return function(arg="special"){
    return `You are ${flair}${arg}${flair}!`
  }
}


let Calculator = {
  add: function(num1,num2){
    return num1+num2
  },
  subtract: function(num1,num2){
    return num1-num2
  },
  multiply: function(num1,num2){
    return num1*num2
  },
  divide: function(num1,num2){
    return num1/num2
  }
}

function actionApplyer(base,functions){
  return functions.reduce(function(result, fn){
    return fn(result)
  },base)
}
