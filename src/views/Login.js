import { ForgotPassword } from "./ForgotPassword";
import { SignUp } from "./SignUp";


export function Login(){
    
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    loginContainer.innerHTML = `
    <div class="login" tabindex="0">
        <form>
        <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
        <h4>Sign in and start your SPA adventure</h4>
        <input class='login-email-input'  type="Email" placeholder="Email">
        <input class='login-password-input' type="password" placeholder="Password">
        <button type='submit' class='login-btn'>LOGIN</button>
        <h4 class="login-forgot-password">Forgot password?</h4>
        <p>Don’t have an account yet? <strong class='login-sign-up-btn'>Sign Up</strong></p>
        </form>
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

    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.alert('Logowanie...');

      //Dopisać logikę logowania...

      let emailValue = loginContainer.querySelector('.login-email-input').value;
      let passwordValue = loginContainer.querySelector('.login-password-input').value;

      console.log('Email: ' + emailValue);
      console.log('Password: ' + passwordValue);
    });


    const forgotPasswordBtn = loginContainer.querySelector('.login-forgot-password');

    forgotPasswordBtn.addEventListener('click', () => {

      loginContainer.remove();
      const main = document.querySelector("main");
      main.append(ForgotPassword());
      document.body.style.overflow = "hidden";

    });

    const signUpBtn = loginContainer.querySelector('.login-sign-up-btn');

    signUpBtn.addEventListener('click', () => {
      
      loginContainer.remove();
      const main = document.querySelector("main");
      main.append(SignUp());

      const signUp = document.querySelector('.sign-up');

      signUp.focus();
      document.body.style.overflow = "hidden";
    });

    return loginContainer;
}