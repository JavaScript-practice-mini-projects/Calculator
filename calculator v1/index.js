
const ac = document.querySelector('.ac');
const equals = document.querySelector('.equals');
let showResults = document.getElementById('showResults');


// Event listener



// function 

function showNum(data){
    showResults.value += data
}

// ac button 
function acButton(){
    showResults.value = '';
}

// del button 
function del(){
    showResults.value = showResults.value.slice(0, -1);
}

function calculate(){
    if(showResults.value !== ''){
        let cal = showResults.value;
        showResults.value = eval(cal)
    }else{
        showResults.value = '';
    }
}