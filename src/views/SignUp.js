
import { Login } from "./Login";
export function SignUp() {

    const signUpContainer = document.createElement('div');
    signUpContainer.classList.add('sign-up-container');

    signUpContainer.innerHTML = `
    <div class="sign-up" tabindex="10">
    <form>
    <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
    <h4>Sign up and start your SPA adventure</h4>
    <input class='sign-up-email-input'  type="Email" placeholder="Email">
    <input class='sign-up-first-name-input'  type="Text" placeholder="First Name">
    <input class='sign-up-password-input' type="password" placeholder="Password">
    <input class='sign-up-confirm-password-input' type="password" placeholder="Confirm Password">
    <div class='sign-up-password-indicator-container'>

    </div>
    <div class='sign-up-alerts'>

    </div>
    <button type='submit' class='sign-up-btn'>SIGN UP</button>
    <p>Already have an account ? <strong class='sign-up-sign-in-btn'>Sign In</strong></p>
    </form>
  </div>
    `

    const signInBtn = signUpContainer.querySelector('.sign-up-sign-in-btn');

    signInBtn.addEventListener('click', () => {

        signUpContainer.remove();

        const main = document.querySelector("main");
        main.append(Login());
        document.body.style.overflow = "hidden";
    });


    signUpContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("sign-up-container")) {
          e.target.remove();
          const main = document.querySelector("main");
        main.append(Login());
        document.body.style.overflow = "hidden";
        }
      });

      const signUp = signUpContainer.querySelector('.sign-up');

        signUp.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            signUpContainer.remove();
            const main = document.querySelector("main");
            main.append(Login());
            document.body.style.overflow = "hidden";
        }
      });

      const signUpBtn = signUpContainer.querySelector('.sign-up-btn');

      signUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
      })

    return signUpContainer;
}