let user=sessionStorage.getItem("userLoggedin");
let head=document.getElementById("heading");
head.innerHTML=`WELCOME  ${user.toUpperCase()}`;
let name=document.getElementById("name");
name.innerHTML=`${user}`;
let pass=sessionStorage.getItem("passLoggedin");
let key=document.getElementById("pass");
key.innerHTML=`${pass}`;
let logOut=document.getElementById("logOut");
logOut.addEventListener("click",function(){
    sessionStorage.clear();
   window.location  ="index.html";
});