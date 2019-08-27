function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual="*") {
    return function(adj="special") {
        return `You are ${visual}${adj}${visual}!`
    }
}

let Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
        return 10 / 5
    }
}

function actionApplyer(start=13, functionArr=[]) {
    let result = start;
    for (const func of functionArr) {
        result = func(result);
    }
    return result;
}