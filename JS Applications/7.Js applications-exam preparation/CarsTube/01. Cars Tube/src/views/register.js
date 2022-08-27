import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { register } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="register">
    <div class="container">
        <form id="register-form" @submit=${onSubmit}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="#">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let username = form.get('username');
    let password = form.get('password');
    let rePass = form.get('repeatPass');

    if (username == '' || password == '') {
        return alert('All fields are required!');
    }
    if (password != rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(username, password);
    updateNav();
    page.redirect('/all');
}

export async function registerPage() {

    render(template(), container);
}