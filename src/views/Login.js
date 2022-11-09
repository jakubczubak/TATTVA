

export function Login(){
    
    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    loginContainer.innerHTML = `
    <div class="login">
        <img src=${require("../assets/tattva-spa-vector-logo.svg")} alt="logo">
        <h4>Sign in and start your SPA adventure</h4>
        <input class='login-email-input'  type="Email" placeholder="Email">
        <input class='login-password-input' type="password" placeholder="Password">
        <button class='login-btn'>LOGIN</button>
        <h4 class="login-forgot-password">Forgot password?</h4>
        <p>Don’t have an account yet? <strong class='login-sign-up-btn'>Sign Up</strong></p>
      </div>
    `

    return loginContainer;
}