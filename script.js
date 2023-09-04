document.getElementById('signUpButton').addEventListener('click', function () {
    document.getElementById('logInPage').style.display = 'none';
    const main = document.getElementById('mainPage');
    const signUp = document.createElement('div');
    signUp.classList.add('flex', 'flex-col', 'justify-center', 'w-[300px]', 'mx-auto', 'mt-10', 'p-4', 'border', 'rounded-lg', 'signupPage')
    signUp.innerHTML = `
    <input type="email" id="regimail" placeholder="   Email" class="input input-bordered w-full max-w-xs" /> <br>
    <input type="password" id="regiPass" placeholder="   Password" class="input input-bordered w-full max-w-xs" /> <br>
    <div class="text-center">
    <button class="btn normal-case" id="regi" onclick="registart()">Registar</button>
    <button class="btn normal-case" id="backLogIn" onclick=" backLogIn()">logIn</button>
    </div>   
    `;
    main.appendChild(signUp);
})
function registart() {
    let regimail = document.getElementById('regimail').value;
    let regipassword = document.getElementById('regiPass').value;
    console.log(regimail)
    console.log(regipassword)
    let user = {};
    user['mail'] = regimail;
    user['password'] = regipassword;
    console.log(user);
    const convertUserToJson = JSON.stringify(user);
    localStorage.setItem('users', convertUserToJson);
}
function backLogIn() {
    document.location.href = 'localsorage.html';
}

// log in page related javaScript 

document.getElementById('logInMain').addEventListener('click', function () {
    let logInEmail = document.getElementById('logInEmail').value;
    let logInPassword = document.getElementById('logInPassword').value;
    const userData = JSON.parse(localStorage.getItem('users'));
    if (logInEmail == userData.mail && logInPassword == userData.password) {
        document.getElementById('logInPage').style.display = 'none';
        const main = document.getElementById('mainPage');
        const welcome = document.createElement('div');
        welcome.classList.add('text-4xl', 'text-center', 'font-semibold', 'mt-10', 'text-gold-500');
        welcome.innerText = `Comming Soon ` 
        main.appendChild(welcome)
    }
    else{
        const invalidMail = document.getElementById('invalidMail');
        invalidMail.innerText= '';
        const invalidPassword = document.getElementById('invalidPassword');
        invalidPassword.innerText= '';
        const span_1 = document.createElement('span');
        span_1.classList.add('text-red-400');
        span_1.innerText = `invalid email`;
        invalidMail.appendChild(span_1);
        const span_2 = document.createElement('span');
        span_2.classList.add('text-red-400');
        span_2.innerText = `invalid password`;
        invalidPassword.appendChild(span_2);
    }
})