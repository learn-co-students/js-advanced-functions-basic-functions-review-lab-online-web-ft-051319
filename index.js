// Your code here

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(obligation = "go to the office"){
    return `This Monday, I will ${obligation}.`
};

function wrapAdjective(flair = "*"){
    return function(param = "special"){
        return `You are ${flair}${param}${flair}!`
    }
}

let Calculator = {
    add: function(x, y){ return x + y},
    subtract: function(x, y){ return x - y},
    multiply: function(x, y){ return x * y},
    divide: function(x, y){ return x / y}
}

function actionApplyer(int, functionsArray){
    return functionsArray.reduce(function(int, func){
        return func(int)
    }, int)
}
