
const mathDisplay = document.getElementById('mathDisplay');
const resultDisplay = document.getElementById('resultDisplay');
let currentValue = '';
let previousValue = '';
let operator = '';
let mathOperator = '';
let lastResult = '';







/**
 * Number store in variable for mathematics
 * @param {string} num 
 */
function appendValue(num){
    console.log( typeof num)
    currentValue += num
    mathOperator += num
    mathDisplay.textContent = mathOperator;
    console.log(mathOperator)
}

/**
 * mathematics operator 
 * @param {string} op 
 */
function setOperator(op){
    operator = op
    mathOperator += op
    mathDisplay.textContent = mathOperator;

    previousValue = currentValue;
    currentValue = '';
    console.log(mathOperator)
}

function equals(){

    let result = ''

    if(operator === '+') {
        console.log('success')
        result  = Number(previousValue) + Number(currentValue)
    }else if(operator === '-'){
         result  = Number(previousValue) - Number(currentValue)
    }else if(operator === '*'){
         result  = Number(previousValue) * Number(currentValue)
    }else if(operator === '/'){
         result  = Number(previousValue) / Number(currentValue)
    }else{
        console.log('Invalid operator')
    }

    // lastResult = toString(result)
    let currentValue = '';
    let previousValue = '';
    let operator = '';

    resultDisplay.textContent = result
}



/**
 * all calculate results empty
 */
function clearDisplay(){
    
    mathDisplay.textContent = '00';
    resultDisplay.textContent = '00';
}


