import { Login } from "./Login";
export function ForgotPassword() {
  const forgotPassowrdContainer = document.createElement("div");
  forgotPassowrdContainer.classList.add("forgot-password-container");

  forgotPassowrdContainer.innerHTML = `
    <div class="forgot-password" tabindex="0">
        <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
        <h4>Tell us your email address, and we'll get you back on track in no time</h4>
        <input class='forgot-password-email-input'  type="Email" placeholder="Email">
        <div class='forgot-password-alerts'>

         </div>
        <button class='forgot-password-btn'>RESET</button>
        <h4 class="forgot-password-sign-in">Sign In</h4>
      </div>
    `;

  const resetBtn = forgotPassowrdContainer.querySelector(
    ".forgot-password-btn"
  );

  resetBtn.addEventListener("click", () => {
    let emialValue = forgotPassowrdContainer.querySelector(
      ".forgot-password-email-input"
    ).value;

    if (validateEmail(emialValue)) {
      console.log("Reseting password...");
      console.log("Check email: " + emialValue);
      forgotPassowrdContainer.remove();

      const main = document.querySelector("main");
      main.append(Login());
      document.body.style.overflow = "hidden";
    } else {
      const alerts = forgotPassowrdContainer.querySelector(
        ".forgot-password-alerts"
      );
      alerts.innerHTML = "";
      const paragraph = document.createElement("p");
      paragraph.style.color = "#f44336";
      paragraph.innerHTML = `Email ${emialValue} is not valid 😞`;
      alerts.append(paragraph);
    }
  });

  const signInBtn = forgotPassowrdContainer.querySelector(
    ".forgot-password-sign-in"
  );

  signInBtn.addEventListener("click", () => {
    forgotPassowrdContainer.remove();

    const main = document.querySelector("main");
    main.append(Login());
    document.body.style.overflow = "hidden";
  });

  function validateEmail(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  return forgotPassowrdContainer;
}
