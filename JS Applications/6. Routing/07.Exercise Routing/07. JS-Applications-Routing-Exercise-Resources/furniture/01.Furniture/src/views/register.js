
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { logout, register } from '../api/api.js';
import { updateNav,setButtonsActive } from '../app.js';
import page from '../../../node_modules/page/page.mjs';

let container = document.querySelector('.container');

  let template = () => html`
<div class="row space-top">
  <div class="col-md-12">
    <h1>Register New User</h1>
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
      <div class="form-group">
        <label class="form-control-label" for="rePass">Repeat</label>
        <input class="form-control" id="rePass" type="password" name="rePass">
      </div>
      <input type="submit" class="btn btn-primary" value="Register" />
    </div>
  </div>
</form>`;

  async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let email = form.get('email');
    let password = form.get('password');
    let rePass = form.get('rePass');

    if (email == '' || password == '') {
       return alert('All fields are required!');
    }

    if (password != rePass) {
      return alert ('Passwords must match!');
    }
    
   await register(email,password);
   updateNav();
   page.redirect('/');
  }


export async function registerPage() {
  setButtonsActive(document.getElementById('registerLink'));
  render(template(), container)
}