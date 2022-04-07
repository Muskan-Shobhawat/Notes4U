const modalcontainer = document.getElementById("modalcontainer");
const exit = document.getElementById("close");
let log = document.getElementById("log");
log.addEventListener("click", function () {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username == null) {
        usernameObj = [];
    }
    else {
        usernameObj = JSON.parse(username);
    }
    if (password == null) {
        passwordObj = [];
    }
    else {
        passwordObj = JSON.parse(password);
    }
    let userValue = document.getElementById("user").value.toLowerCase();
    let passValue = document.getElementById("pass").value.toLowerCase();
    function login() {
        let element = 0;
        for (let i = 0; i <= usernameObj.length; i++) {
            if (userValue == usernameObj[i] && passValue == passwordObj[i]) {
                modalcontainer.classList.add("show");
                let target = document.getElementById("text");
                let html = `You are logged in`;
                target.innerHTML = html;
                element = 1;
                sessionStorage.getItem("userLoggedin");
                sessionStorage.setItem("userLoggedin", userValue);
                sessionStorage.getItem("passLoggedin");
                sessionStorage.setItem("passLoggedin", passValue);
                exit.addEventListener("click", () => {
                    window.location = "home.html";
                    modalcontainer.classList.remove("show");
                });
            };
        };
        return element;
    };
    let element = login();
    if (element == 0) {
        if (userValue == "" || passValue == "") {
            modalcontainer.classList.add("show");
            let target = document.getElementById("text");
            let html = `Please fill both the fields`;
            target.innerHTML = html;
        }
        else {
            modalcontainer.classList.add("show");
            let target = document.getElementById("text");
            let html = `Incorrect username or password`;
            target.innerHTML = html;
        }
    }
    exit.addEventListener("click", () => {
        modalcontainer.classList.remove("show");
    })
    user.value = "";
    pass.value = "";
});
