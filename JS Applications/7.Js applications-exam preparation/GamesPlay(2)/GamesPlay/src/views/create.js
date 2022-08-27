import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { createGame } from "../api/data.js";

let template = () => html`
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`;


async function onSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    let title = form.get('title');
    let category = form.get('category');
    let maxLevel = form.get('maxLevel');
    let imageUrl = form.get('imageUrl');
    let summary = form.get('summary');

    if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
         return alert('All fields are required!');
    }

    let data = { title,category,maxLevel,imageUrl,summary };


    await createGame(data);
    page.redirect('/');
}

let container = document.querySelector('main');

export async function createPage(){
  
render (template(),container);
}