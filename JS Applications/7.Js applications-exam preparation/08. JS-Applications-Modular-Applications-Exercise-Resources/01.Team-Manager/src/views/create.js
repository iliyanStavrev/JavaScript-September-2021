import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { createTeam } from "../api/data.js";

let template = () => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form id="create-form" class="main-form pad-large" @submit=${onSubmit}>
            <div class="error"></div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`;


async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let name = form.get('name');
    let logoUrl = form.get('logoUrl');
    let description = form.get('description');
   
    if (name == '' || logoUrl == '' || description == '') {
        document.querySelector('.error').textContent = 'All fields are required!';
        return ;
    }
 
    let data = { name, logoUrl, description };


    await createTeam(data);
    page.redirect('/teams');
}

let container = document.querySelector('main');

export async function createPage() {

    render(template(), container);
}