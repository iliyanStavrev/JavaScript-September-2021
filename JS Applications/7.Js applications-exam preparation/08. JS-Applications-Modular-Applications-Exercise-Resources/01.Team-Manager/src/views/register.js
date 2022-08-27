import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { register } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form id="register-form" class="main-form pad-large" @submit=${onSubmit}>
            <div class="error"></div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let username = form.get('username');
    let password = form.get('password');
    let rePass = form.get('repass');

    if (email.length < 3 || password.length < 3 || username.length < 3) {
        document.querySelector('.error').textContent = 'All fields are required!';
        return;
    }
    if (password != rePass) {
        document.querySelector('.error').textContent = 'Passwords don\'t match!';
        return ;
    }

    await register(email, password);
    updateNav();
    page.redirect('/');
}

export async function registerPage() {

    render(template(), container);
}