let genPass = () => {
    let smallLetters = "abcdefghijklmnopqrstuvwxyz";
    let bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let special = "!@#$%^&*";

    let charSet = "";

    if (document.getElementById('low').checked) {
        charSet += smallLetters;
    }
    if (document.getElementById('up').checked) {
        charSet += bigLetters;
    }
    if (document.getElementById('spe').checked) {
        charSet += special;
    }
    if (document.getElementById('num').checked) {
        charSet += numbers;
    }

    const n = parseInt(document.getElementById('limit').value);
    let pass = "";

    if (charSet.length > 0 && !isNaN(n) && n > 0) {
        for (let i = 0; i < n; i++) {
            pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
       
        document.getElementById('result').innerHTML=`${pass}<button class="copy-btn" id="copyBtn"  onclick="copyPassword()">Copy</button>`
        
    } else {
        document.getElementById('result').innerHTML = "Please select at least one option and provide a valid length.";
    }
};

let copyPassword = () => {
    const password = document.getElementById('result').textContent;

    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    }
}; 