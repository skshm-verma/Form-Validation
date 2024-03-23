let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault(); /** //* stops the flickering/vanishing message **/
    validationWorking(username,0,"Username cannot be blank");
    validationWorking(email,1,"Email cannot be blank");
    validationWorking(password,2,"Password cannot be blank");
})


let validationWorking = (id,serial,message) => {
    if (id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = '';
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

/*
//* an array type of input is recevied  when we use getElementsByClassName & getElementsByTagName
//*  errorMsg = ['error','error','error']
//*  errorMsg[2].innerHTML = "biuboicnoewc";
*/