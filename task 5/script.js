let mini =1
let maxi = 7
let num1;
let num2;
function Throw1(){
    num1 = Math.round(Math.random()*(maxi-mini))
    number1.textContent = num1
}

function Throw2(){
    num2 = Math.round(Math.random()*(maxi-mini))
    number2.textContent = num2
}

function winner(){
    winnr.textContent = Math.max(num1,num2)
    if (num1>num2){
        winnr.textContent = "Person 1"
    }
    if (num1 == num2) {
        winnr.textContent = "Person 1 and 2 both"
    }
    else{
        winnr.textContent = "Person 2"
    }

    }
