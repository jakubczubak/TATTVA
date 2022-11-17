import { ForgotPassword } from "./ForgotPassword";
import { SignUp } from "./SignUp";
import { Nav } from '../navigation/Nav'


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
        <div class='login-alerts'>

        </div>
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

    loginBtn.addEventListener('click', async (e) => {
      e.preventDefault();
     

      const loginAlerts = loginContainer.querySelector('.login-alerts');

      loginAlerts.innerHTML = ``;

      let emailValue = loginContainer.querySelector('.login-email-input').value;
      let passwordValue = loginContainer.querySelector('.login-password-input').value;

      await fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((user) => user.email === emailValue);
        
        if(user){
          if(user.passwordValue === passwordValue){
            window.alert('Successfully loged in...')

            sessionStorage.setItem('userName', user.firstName);

            const main = document.querySelector("main");
            const nav = document.querySelector('nav');
            
            nav.remove();

            main.before(Nav());

            loginContainer.remove();

          }
        }else{
          const paragraph = document.createElement("p");
          paragraph.style.color = "#f44336";
          paragraph.innerHTML = `Incorrect email address or password 👎`;
          loginAlerts.append(paragraph);
        }
      });

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