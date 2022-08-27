
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { register } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="register-page" class="register">
    <form id="register-form" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('confirm-pass');

    if (email == '' || password == '') {
        return alert('All fields are required!');
    }
    if (password != rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(email,password);
    updateNav();
    page.redirect('/');
}

export async function registerPage() {

render (template(),container);
}