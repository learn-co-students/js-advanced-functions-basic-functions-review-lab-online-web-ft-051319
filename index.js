function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = '*') {
    return (adj = 'special') => {
        return `You are ${visualFlair}${adj}${visualFlair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    }, 
    subtract: function(num1, num2) {
        return num1 - num2;
    }, 
    multiply: function(num1, num2) {
        return num1 * num2;
    }, 
    divide: function(num1, num2) {
        return num1 / num2;
    }
}

function actionApplyer(integer, fxnsArray) {
    let result = integer;
    for (let i = 0; i < fxnsArray.length; i++) {
        result = fxnsArray[i](result)
    }
    return result;
}