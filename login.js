// funtion to handle the correct and incorrect passwords
let passwords=["123456789"];
function validatePassword() {
    let inputPassword = document.getElementById("password").value;
    if (passwords.includes(inputPassword)) {
        console.log("Password is correct.");
    } else {
        console.log("Incorrect password.");
    }
}
