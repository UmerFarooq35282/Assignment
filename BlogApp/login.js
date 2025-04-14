let submitBtn = document.getElementById('submitBtn');

let userArr = JSON.parse(localStorage.getItem('usersInfo')) || []

function redirect(url){
    window.location.href = url
}

function loginFn(){
    let email = document.getElementById('login-email').value;
    let pass = document.getElementById('login-password').value;
    let emailError = document.getElementById('email-error')
    let passError = document.getElementById('password-error')
    
    if(email.length === 0){
        emailError.style.display = 'block'
    }

    email.length === 0 ? emailError.style.display = 'block' :  emailError.style.display = 'none'
    pass.length === 0 ? passError.style.display = 'block' :  passError.style.display = 'none'

    for(let i =0; i< userArr.length; i++){
        console.log(userArr[i]);
        
        if(email == userArr[i].userEmail && pass == userArr[i].userPass){
            Swal.fire({
                title: "Login Success!",
                icon: "success",
                draggable: true,
                preConfirm: () => {
                    redirect('http://127.0.0.1:5500/index.html')
                }
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Email or Password Not Matched",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
}

submitBtn.addEventListener('click' , loginFn)