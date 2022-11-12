import { Login } from "./Login";
export function SignUp() {
  const signUpContainer = document.createElement("div");
  signUpContainer.classList.add("sign-up-container");

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
    `;

  const signInBtn = signUpContainer.querySelector(".sign-up-sign-in-btn");

  signInBtn.addEventListener("click", () => {
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

  const signUp = signUpContainer.querySelector(".sign-up");

  signUp.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      signUpContainer.remove();
      const main = document.querySelector("main");
      main.append(Login());
      document.body.style.overflow = "hidden";
    }
  });

  const signUpBtn = signUpContainer.querySelector(".sign-up-btn");

  const alerts = signUpContainer.querySelector(".sign-up-alerts");

  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    validateForm();
  });

  function validateForm() {
    alerts.innerHTML = ``;

    let ifOK = true;

    const email = signUpContainer.querySelector(".sign-up-email-input").value;

    if (validateEmail(email)) {
      //do nothing
    } else {
      const paragraph = document.createElement("p");
      paragraph.style.color = "#f44336";
      paragraph.innerHTML = `Email ${email} is not valid 😞`;
      alerts.append(paragraph);
      ifOK = false;
    }

    const firstName = signUpContainer.querySelector(
      ".sign-up-first-name-input"
    ).value;

    if (validateFirstNameInput(firstName)) {
      //do nothing
    } else {
      const paragraph = document.createElement("p");
      paragraph.style.color = "#f44336";
      paragraph.innerHTML = `First name ${firstName} is not valid 🤦`;
      alerts.append(paragraph);
      ifOK = false;
    }

    const password = signUpContainer.querySelector(
      ".sign-up-password-input"
    ).value;
    const confirmPassword = signUpContainer.querySelector(
      ".sign-up-confirm-password-input"
    ).value;

    if (valdatePassword(password, confirmPassword)) {
      //do nothing
    } else {
      const paragraph = document.createElement("p");
      paragraph.style.color = "#f44336";
      paragraph.innerHTML = `Password must be minimum eight characters, at least one letter and one number 👌`;
      alerts.append(paragraph);
      ifOK = false;
    }

    return ifOK;
  }

  function checkIfEmailExist(email) {
    let ifExist = false;
    //check if email exist in DB

    return ifExist;
  }

  function validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  function validateFirstNameInput(firstName) {
    return firstName.match(/^[\p{L}'][ \p{L}'-]*[\p{L}]$/u);
  }

  function valdatePassword(password, confirmPassword) {
    if (password != confirmPassword) {
      return null;
    } else {
      //Minimum eight characters, at least one letter and one number:
      return password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    }
  }

  return signUpContainer;
}
