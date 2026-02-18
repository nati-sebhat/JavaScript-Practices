const name = document.getElementById('userName');
const password = document.getElementById('password');
const butn = document.getElementById('btn');
const checking = document.getElementById('check');

butn.addEventListener('click' , () => {
    if(name.value==="admin" && password.value==="1234"){
        checking.textContent = "Login Successful";
        checking.style.color = "green";
    }else{
        checking.textContent = "Invalid Credentials";
        checking.style.color = "red";
    }
});