let num1;

function Throw1() {
    const mini = parseInt(document.getElementById('val').value);
    const maxi = parseInt(document.getElementById('val2').value);

    if (isNaN(mini) || isNaN(maxi) || mini >= maxi) {
        document.getElementById('result').innerHTML = "Invalid range. Ensure Min < Max and both are valid numbers.";
        return;
    }

    num1 = Math.round(Math.random() * (maxi - mini) + mini);

    console.log(`Generated number: ${num1}`);
    window.alert("Open the console to see the generated number.");
}

function checkRange() {
    const mini = parseInt(document.getElementById('val').value);
    const maxi = parseInt(document.getElementById('val2').value);
    const Yguess = parseInt(document.getElementById('val3').value);

    if (isNaN(mini) || isNaN(maxi) || isNaN(Yguess)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers in all fields.";
        return;
    }

    if (Yguess < mini || Yguess > maxi) {
        document.getElementById('result').innerHTML = "Please enter a valid number within the range.";
        return;
    }

    const diff = Math.abs(num1 - Yguess); 

    if (Yguess === num1) {
        document.getElementById('result').innerHTML = `🎉Correct answer!🎉 The number was ${num1}.`;
        clearFields();
    } else {
        
        if (diff === 1) {
            document.getElementById('result').innerHTML =`You're very close! You're just 1 number away!`
        } else if (diff <= 3) {
            document.getElementById('result').innerHTML =`You're close! Try again.`
        } else {
            if (Yguess < num1) {
                document.getElementById('result').innerHTML =`Try a bigger number.`
            } else {
                document.getElementById('result').innerHTML =`Try a smaller number.`
            }
        }

        
    }
    function clearFields() {
        document.getElementById('val').value = '';
        document.getElementById('val2').value = '';
        document.getElementById('val3').value = '';
    }
}



