import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs'
import { register } from "../api/data.js";
import { updateNav } from "../app.js";
import { notify } from "./notify.js";

let template = () => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male">
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="#">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

let container = document.querySelector('main');

async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let username = form.get('username');
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('repeatPass');
     let gender = form.get('gender');
   
     
    
    if (username == '' || email == '' || password == '' || !gender) {
         return notify('All fields are required!');
    }

    if (password != rePass) {
        return notify('Passwords don\'t match');
    }


   await register(username,email,password,gender);
   updateNav();
    page.redirect('/');

}

export async function registerPage(){
    render(template(),container);
}