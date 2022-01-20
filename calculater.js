
function display(val){
    document.getElementById('textval').value += val;
}


function hasNumberLeft(){
    const output = document.getElementById('textval').value;
    return !isNaN(output.charAt(output.length-1)) ;
}

function isEmpty(){
    const output = document.getElementById('textval').value;
    return output == " ";
}
function validOperator(operator){
    const output = document.getElementById('textval').value;
    var pos = output.length - 1;
    var valid = true;
    while(pos >= 0 && valid){
        if(output.charAt(pos) == operator)
            valid = false;
        if(isNaN(output.charAt(pos)) && !hasNumberLeft())
            break;
        pos--;
    }
    return valid;
}
function run(){
    document.getElementById('.').onclick = function(){
        if(hasNumberLeft() && validOperator())
            display('.');   
    };
    document.getElementById('+').onclick = function(){
        if(hasNumberLeft() && !isEmpty() && validOperator())
            display('+');
    };
    document.getElementById('1').onclick = function(){
        display('1');
    };
    document.getElementById('2').onclick = function(){
        display('2');
    };
    document.getElementById('3').onclick = function(){
        display('3');
    };
    document.getElementById('-').onclick = function(){
        if(hasNumberLeft()&& !isEmpty() && validOperator())
            display('-');
    };
    document.getElementById('4').onclick = function(){
        display('4');
    };
    document.getElementById('5').onclick = function(){
        display('5');
    };
    document.getElementById('6').onclick = function(){
        display('6');
    };
    document.getElementById('*').onclick = function(){
        if(hasNumberLeft()&& !isEmpty() && validOperator())
            display('*');
    };
    document.getElementById('7').onclick = function(){
        display('7');
    };
    document.getElementById('8').onclick = function(){
        display('8');
    };
    document.getElementById('9').onclick = function(){
        display('9');
    };
    document.getElementById('/').onclick = function(){
        if(hasNumberLeft()&& !isEmpty() && validOperator())
            display('/');
    };
    document.getElementById('0').onclick = function(){
        display('0');
    };
    document.getElementById('=').onclick = function(){
        if(hasNumberLeft()&& !isEmpty() && validOperator())
            evaluate();
    };
    document.getElementById('c').onclick = function(){
        clr();
    };
}

function clr(){
    document.getElementById("textval").value = " ";
}

function evaluate(){
    let x =  document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value = y;
}
run();