const passwordBox = document.getElementById("password");
const passwordLength = 8;

const upperCase = "ABCDEFGHIKLMNOPQRSTVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_-+={}[]|\\:;'<>,.?/";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while (password.length < passwordLength) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password; 
};
const copyToClipboard = () => {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value);
   
};

