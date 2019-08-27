// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style = "*"){
    return function(str1 = "special"){
        return `You are ${style}${str1}${style}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
}

let actionApplyer = function(start, arrFn){
    let num = start

    for(let i = 0; i < arrFn.length; i++){
        num = arrFn[i](num)
    }
    return num
}