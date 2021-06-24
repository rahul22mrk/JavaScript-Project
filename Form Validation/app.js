let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm() {
    if (username.value == "") {
        flag = 0;
        document.getElementById("userError").innerHTML = "User Name is Empty"
    } else if (username.value.length < 3) {
        flag = 0;
        document.getElementById("userError").innerHTML = "User Name require min 3 char";
    } else {
        flag = 1;
        document.getElementById("userError").innerHTML = "";

    }


    if (password.value == "") {
        flag = 0;
        document.getElementById("passError").innerHTML = "Password is Empty";
    } else {
        flag = 1;
        document.getElementById("passError").innerHTML = ""
    }
    if (flag) {
        return true;
    } else {
        return false;
    }

}