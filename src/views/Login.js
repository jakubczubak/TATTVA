

export function Login(){
    
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    loginContainer.innerHTML = `
    <div class="login" tabindex="0">
        <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
        <h4>Sign in and start your SPA adventure</h4>
        <input class='login-email-input'  type="Email" placeholder="Email">
        <input class='login-password-input' type="password" placeholder="Password">
        <button class='login-btn'>LOGIN</button>
        <h4 class="login-forgot-password">Forgot password?</h4>
        <p>Don’t have an account yet? <strong class='login-sign-up-btn'>Sign Up</strong></p>
      </div>
    `

    const login = document.querySelector('.login');

    login.focus();
    login.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        loginContainer.remove();
        document.body.style.overflow = "auto";
      }
    });

    loginContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("login-container")) {
        e.target.remove();
        document.body.style.overflow = "auto";
      }
    });

    const loginBtn = loginContainer.querySelector('.login-btn');

    loginBtn.addEventListener('click', () => {
      window.alert('Logowanie...');

      //Dopisać logikę logowania...

      let emailValue = loginContainer.querySelector('.login-email-input').value;
      let passwordValue = loginContainer.querySelector('.login-password-input').value;

      console.log('Email: ' + emailValue);
      console.log('Password: ' + passwordValue);
    });


    const forgotPasswordBtn = loginContainer.querySelector('.login-forgot-password');

    forgotPasswordBtn.addEventListener('click', () => {
      window.alert('Forgot password');
      //Dopisać logikę
    });

    const signUpBtn = loginContainer.querySelector('.login-sign-up-btn');

    signUpBtn.addEventListener('click', () => {
      window.alert('Sign Up');
      //Dopisać logikę
    });

    return loginContainer;
}