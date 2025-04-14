let submitBtn = document.getElementById('submitBtn');

let userArr = [];

userArr = JSON.parse(localStorage.getItem('usersInfo')) || []

console.log(userArr)

function loginFn(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('signup-email').value;
    let pass = document.getElementById('signup-password').value;
    // let confirmPass = document.getElementById('confirm-pass').value;
    let emailError = document.getElementById('email-error')
    let nameError = document.getElementById('name-error')
    let passError = document.getElementById('password-error')
    // let confirmPassError = document.getElementById('c-password-error')
    
    // Error handling Code 

    name.length === 0 ? nameError.style.display = 'block' :  nameError.style.display = 'none'
    email.length === 0 ? emailError.style.display = 'block' :  emailError.style.display = 'none'
    pass.length === 0 ? passError.style.display = 'block' :  passError.style.display = 'none'
    // confirmPass.length === 0 ? confirmPassError.style.display = 'block' :  confirmPassError.style.display = 'none'
    // confirmPass === pass ? confirmPassError.style.display = 'block' :  confirmPassError.style.display = 'none'

    let userInfo = {
        userId : new Date().getTime(),
        userName : name,
        userEmail : email,
        userPass : pass,
    };

    userArr.push(userInfo)
    localStorage.setItem('usersInfo' , JSON.stringify(userArr))
}

submitBtn.addEventListener('click' , loginFn)

