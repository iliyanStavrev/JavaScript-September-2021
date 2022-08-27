import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { login } from '../api/data.js';
import { updateNav } from '../app.js';


let template = () => html`
<section id="login">
    <div class="container">
        <form id="login-form" @submit=${onSubmit}>
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
`;

let container = document.querySelector('main');

async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let username = form.get('username');
    let password = form.get('password');


    if (username == '' || password == '') {
        return alert('All fields are required!');
    }

    await login(username, password);
    updateNav();
    page.redirect('/all');
}


export async function loginPage() {

    render(template(), container);
}