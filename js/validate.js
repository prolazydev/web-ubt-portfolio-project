const username = document.getElementById('usernamesignup');
const email = document.getElementById('emailsignup');
const password = document.getElementById('passwordsignup');

    function validateSignUp(){
    let messages = [];
    if(username.value.trim() === '' || username.value == null){
        username.style = "border: 2px solid red;";
        username.placeholder = "error, name cannot be empty";
        return false;
    }
    if(username.value != ''){
        username.style ="border-bottom: 1 solid #999;";
    }
    if(email.value.trim() === '' || email.value == null){
        email.style = "border: 2px solid red;";
        email.placeholder = "error, email cannot be empty";
        return false;
    }
    if(email.value != ''){
        email.style ="border-bottom: 1 solid #999;";
    }
    if(password.value.trim() === '' || password.value == null || password.value.length < 6){
        password.style = "border: 2px solid red;";
        password.value = "";
        password.placeholder = "Password empty or less than 6 charachters";
        return false;
    }
    if(password.value != ''){
        password.style ="border-bottom: 1 solid #999;";
    }
    return true;
}

const contactFormUsername = document.getElementById('contactName');
const contactFormEmail = document.getElementById('contactEmail');
const contactSubject = document.getElementById('contactTitle');
const contactFormMessage = document.getElementById('contactMessage');


    function validateContactForm(){
        let messages = [];
        if(contactFormUsername.value.trim() === '' || contactFormUsername.value == null){
            contactFormUsername.style = "border: 2px solid red;";
            contactFormUsername.placeholder = "error, name cannot be empty";
            return false;
        }
        if(contactFormUsername.value != ''){
            contactFormUsername.style = "border-bottom: 1 solid #999;"
        }
        if(contactFormEmail.value.trim() === '' || contactFormEmail.value == null){
            contactFormEmail.style = "border: 2px solid red;";
            contactFormEmail.placeholder = "error, email cannot be empty";
            return false;
        }
        if(contactFormEmail.value != ''){
            contactFormEmail.style = "border-bottom: 1 solid #999;"
        }
        if(contactSubject.value.trim() === '' || contactSubject.value == null){
            contactSubject.style = "border: 2px solid red;";
            contactSubject.placeholder = "error, subject cannot be empty";
            return false;
        }
        if(contactSubject.value != ''){
            contactSubject.style = "border-bottom: 1 solid #999;"
        }
        if(contactFormMessage.value.trim() === '' || contactFormMessage.value == null){
            contactFormMessage.style = "border: 2px solid red;"
            contactFormMessage.placeholder= "Error, you cannot send an empty message."
            return false;
        }
        if(contactFormMessage.value != ''){
            contactFormMessage.style = "border-bottom: 1 solid #999;"
        }
        
        return true;
    }


const loginUsername = document.getElementById('usernameLogin');
const loginPassword = document.getElementById('passwordLogin');
    
        function validateLogin(){
            if(loginUsername.value.trim() === '' || loginUsername.value == null){
                loginUsername.style = "border: 2px solid red;";
                loginUsername.placeholder = "error, username cannot be empty";
                return false;
            }
            if(loginUsername.value != ''){
                loginUsername.style ="border-bottom: 1 solid #999;";
            }
            if(loginPassword.value.trim() === '' || loginPassword.value == null){
                loginPassword.style = "border: 2px solid red;";
                loginPassword.placeholder = "error, password cannot be empty";
                return false;
            }
            if(password.value != ''){
                password.style ="border-bottom: 1 solid #999;";
            }
            return true;
        }