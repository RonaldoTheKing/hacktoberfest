let registerButton = document.getElementById("btn-register");
let registrationForm = document.getElementsByClassName("registration_form");
let cancelBtn = document.getElementsByClassName("cancelBtn")

console.log(registerButton);
console.log(registrationForm);

registerButton.addEventListener("click", function toggleHide() {
    if(registrationForm[0].style.display == 'block'){
        registrationForm[0].style.display = 'none';
    }
    else{
        registrationForm[0].style.display = 'block';
        registerButton.style.display = 'none';
    }
});

cancelBtn[0].addEventListener("click", function showBtn(){
    registrationForm[0].style.display = 'none';
    registerButton.style.display = 'block';
})