var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
    let length = pass.value.length;

    if (length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (length < 4) {
        str.innerHTML = "Weak";
        str.style.color = "red";
        pass.style.borderColor = "red";
    } else if (length >= 4 && length < 8) {
        str.innerHTML = "Medium";
        str.style.color = "orange";
        pass.style.borderColor = "orange";
    } else if (length >= 8) {
        str.innerHTML = "Strong";
        str.style.color = "green";
        pass.style.borderColor = "green";
    }
});
