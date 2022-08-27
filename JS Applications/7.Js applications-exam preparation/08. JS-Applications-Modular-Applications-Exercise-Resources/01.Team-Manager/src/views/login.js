import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { login } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form id="login-form" class="main-form pad-large" @submit=${onSubmit}>
            <div class="error"></div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');


    if (email == '' || password == '') {
        document.querySelector('.error').textContent = 'All fields are required!';
        return;
    }

    await login(email, password);
    updateNav();
    page.redirect('/');
}


export async function loginPage() {

    render(template(), container);
}