import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../../node_modules/page/page.mjs';
import { login } from '../api/api.js';

import { updateNav, setButtonsActive } from '../app.js';

let container = document.querySelector('.container');


let template = () => html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${onSubmit}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
          </div>
          <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </div>
      </div>
    </form>`;

  async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    

    if (email == '' || password == '') {
       return alert('All fields are required!');
    }
    
   await login(email,password);
   updateNav();
   page.redirect('/');
  }

export async function loginPage() {
  setButtonsActive(document.getElementById('loginLink'));
  render(template(), container);
}