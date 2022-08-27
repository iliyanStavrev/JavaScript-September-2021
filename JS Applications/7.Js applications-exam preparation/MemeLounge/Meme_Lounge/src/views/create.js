
import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { createMeme } from "../api/data.js";
import { notify } from "./notify.js";

let template = () => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;


async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let title = form.get('title');
    let description = form.get('description');
    let imageUrl = form.get('imageUrl');

    if (title == '' || description == '' || imageUrl == '') {
         return notify('All fields are required!');
    }

    let data = {title,description,imageUrl};


    await createMeme(data);
    page.redirect('/all');
}

let container = document.querySelector('main');

export async function createPage(){
  
render (template(),container);
}