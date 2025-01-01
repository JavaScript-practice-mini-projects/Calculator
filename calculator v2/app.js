/**
 *  1, ...-2,-1 not work.
 */


const mathDisplay = document.getElementById('mathDisplay');
const resultDisplay = document.getElementById('resultDisplay');
let currentValue = '';
let previousValue = '';
let mathAndOperator = '';
let operator = '';
let lastResult = '';





/**
 * Number store in variable for mathematics
 * @param {string} num 
 */
function appendValue(num){
    currentValue += num
    mathAndOperator += num
    mathDisplay.textContent = mathAndOperator;

}

/**
 * mathematics operator 
 * @param {string} op 
 */
function setOperator(op){
    
    operator = op
    mathAndOperator += operator
    mathDisplay.textContent = mathAndOperator;
    previousValue = currentValue;
    currentValue = '';
}




function equals(){
    if(operator === '') return;

    let result = ''
    switch (operator){
        case '+': result = Number(previousValue) + Number(currentValue);
            break;
        case '-': result = Number(previousValue) - Number(currentValue);
            break;
        
        case '*': result = Number(previousValue) * Number(currentValue);
            break;
        
        case '/': result = Number(previousValue) / Number(currentValue);
            break;

        default: console.error('Invalid operator');
        return
    }

    resultDisplay.textContent = result;
    variablesClear()
}



/**
 * all calculate results empty
 */
function clearDisplay(){
    currentValue = '';
    previousValue = '';
    mathAndOperator = '';
    operator = '';
    mathDisplay.textContent = '00';
    resultDisplay.textContent = '00';
}

/**
 * clears previous used variable
 */
function variablesClear(){
    currentValue = '';
    previousValue = '';
    operator = '';
}
