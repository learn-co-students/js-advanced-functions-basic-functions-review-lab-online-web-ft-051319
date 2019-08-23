// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(param = "special") {
        return `You are ${flair}${param}${flair}!`
    }
};

let Calculator = {
    add: () => 1 + 3
};

// Calculator[subtract] = () => 1 - 3;
Object.assign(Calculator, {subtract: () => 1 - 3, multiply: () => 1 * 3, divide: () => 10 / 5});

function actionApplyer(start, array) {
    if (!Array.isArray(array) || !array.length) {
        return start;
    } else {
        array.forEach(method => {
            start = method(start);
        })
        return start;
    }
};