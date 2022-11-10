
export function ForgotPassword() {

    const forgotPassowrdContainer = document.createElement('div');
    forgotPassowrdContainer.classList.add('forgot-password-container');

    forgotPassowrdContainer.innerHTML = `
    <div class="forgot-password" tabindex="0">
        <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
        <h4>Tell us your email address, and we'll get you back on track in no time</h4>
        <input class='forgot-password-email-input'  type="Email" placeholder="Email">
        <button class='forgot-password-btn'>RESET</button>
        <h4 class="forgot-password-sign-in">Sign In</h4>
      </div>
    `
    return forgotPassowrdContainer;
}