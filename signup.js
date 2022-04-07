const modalcontainer = document.getElementById("modalcontainer");
const exit = document.getElementById("close");
let sign = document.getElementById("sign");
sign.addEventListener("click", function () {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    let name = user.value.toLowerCase();
    let passkey = pass.value.toLowerCase();
    if (username == null) {
        usernameObj = [];
    }
    else {
        usernameObj = JSON.parse(username);
    }
    if (password == null) {
        passwordObj = [];
    }
    else{
        passwordObj = JSON.parse(password);
    }
    let userValue = document.getElementById("user").value.toLowerCase();
    let passValue = document.getElementById("pass").value.toLowerCase();
    function signup() {
        let element = 0;
        for (let i = 0; i <= usernameObj.length; i++) {
            if (userValue == "" || passValue == "") {
                modalcontainer.classList.add("show");
                let target = document.getElementById("text");
                let html = `Please fill all the fields`;
                target.innerHTML = html;               
                element = 1;
            }
            else if(userValue == usernameObj[i]) {
                modalcontainer.classList.add("show");
                let target = document.getElementById("text");
                let html = `User already exists`;
                target.innerHTML = html;
                element = 1;
            }
        }
        return element;
    }
    let element = signup();
    if (element == 0) {
        usernameObj.push(name);
        localStorage.setItem("username", JSON.stringify(usernameObj));
        passwordObj.push(passkey);
        localStorage.setItem("password", JSON.stringify(passwordObj));
        modalcontainer.classList.add("show");
        let target = document.getElementById("text");
        let html = `You are signed in`;
        target.innerHTML = html;
        sessionStorage.getItem("userLoggedin");
        sessionStorage.setItem("userLoggedin", userValue);
        sessionStorage.getItem("passLoggedin");
        sessionStorage.setItem("passLoggedin", passValue);
        user.value = "";
        pass.value = "";
        exit.addEventListener("click", () => {
            window.location = "home.html";
            modalcontainer.classList.remove("show");
        })
    }
    user.value = "";
    pass.value = "";
});
exit.addEventListener("click", () => {
    modalcontainer.classList.remove("show");
})