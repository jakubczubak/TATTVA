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
    <div class='sign-up-password-indicator'>

    </div>
    <div class='sign-up-alerts'>

    </div>
    <button type='submit' class='sign-up-btn'>SIGN UP</button>
    <p>Already have an account ? <strong class='sign-up-sign-in-btn'>Sign In</strong></p>
    </form>
  </div>
    `;

  const passwordInput = signUpContainer.querySelector(
    ".sign-up-password-input"
  );

  passwordInput.addEventListener("keyup", passwordIndicator);

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

  signUpBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    await checkIfEmailExistInDataBase();

    if (validateForm(emailExist)) {
      const emialValue = signUpContainer.querySelector(
        ".sign-up-email-input"
      ).value;
      const firstName = signUpContainer.querySelector(
        ".sign-up-first-name-input"
      ).value;
      const passwordValue = signUpContainer.querySelector(
        ".sign-up-password-input"
      ).value;

      const user = {
        email: emialValue,
        firstName: firstName,
        passwordValue: passwordValue,
      };

      fetch("http://localhost:3000/users", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log("Success:", data);
          signUpContainer.remove();
      const main = document.querySelector("main");
      main.append(Login());
      document.body.style.overflow = "hidden";
        })
        .catch((error) => {
          // console.error("Error:", error);
        });
    }
  });

  let emailExist;

  const checkIfEmailExistInDataBase = async () => {
    const email = signUpContainer.querySelector(".sign-up-email-input").value;

    await fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find((user) => user.email === email);

        return user;
      })
      .then((user) => {
        if (user) {
          emailExist = true;
        } else {
          emailExist = false;
        }
      });
  };

  function validateForm(emailExist) {
    alerts.innerHTML = ``;

    let ifOK = true;

    if (emailExist) {
      const paragraph = document.createElement("p");
      paragraph.style.color = "#f44336";
      paragraph.innerHTML = `Email already exist in Database 👻`;
      alerts.append(paragraph);
      ifOK = false;
    } else {
      //do nothing
    }

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

  function passwordIndicator() {
    const password = signUpContainer.querySelector(
      ".sign-up-password-input"
    ).value;

    const indicatorContainer = signUpContainer.querySelector(
      ".sign-up-password-indicator-container"
    );

    const alert = signUpContainer.querySelector(".sign-up-password-indicator");

    indicatorContainer.innerHTML = "";
    alert.innerHTML = "";

    const weak = document.createElement("div");
    const normal = document.createElement("div");
    const strong = document.createElement("div");

    if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,8}$/)) {
      indicatorContainer.append(weak, normal);
      alert.innerHTML = `
      <p>Password is good 💪</p>
      `;
    } else if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/)) {
      indicatorContainer.append(weak, normal, strong);
      alert.innerHTML = `
      <p>Password is strong 💪💪💪</p>
      `;
    } else {
      indicatorContainer.append(weak);
      alert.innerHTML = `
      <p>Password is weak 👎</p>
      `;
    }
  }

  return signUpContainer;
}
